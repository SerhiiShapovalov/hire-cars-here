import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Notiflix from 'notiflix';

export const fetchCarList = createAsyncThunk(
  'adverts/fetchCarList',
  async (page, { getState }) => {
    const { limit } = getState().adverts;
    const response = await axios.get(
      `https://64d66ed22a017531bc12a15a.mockapi.io/adverts?page=${page}&limit=${limit}`
    );
    return response.data;
  }
);

export const fetchPriceRange = createAsyncThunk(
  'adverts/fetchPriceRange',
  async () => {
    try {
      const min = await axios.get(
        `?orderby=rentalPrice&order=asc&limit=1&page=1`
      );
      const max = await axios.get(
        `?orderby=rentalPrice&order=desc&limit=1&page=1`
      );

      return { minPrice: min, maxPrice: max };
    } catch (error) {
      throw error;
    }
  }
);

const catalogSlice = createSlice({
  name: 'adverts',
  initialState: {
    carList: [],
    currentPage: 1,
    limit: 12,
    endOfCollection: false,
    isLoading: false,
    minPrice: 0,
    maxPrice: 0,
    brand: '',
    favoriteCars: [],
  },

  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setMinPrice: (state, action) => {
      state.minPrice = action.payload;
    },
    setMaxPrice: (state, action) => {
      state.maxPrice = action.payload;
    },
    setBrand: (state, action) => {
      state.brand = action.payload;
    },
    setPriceRange: (state, action) => {
      state.minPrice = action.payload.minPrice;
      state.maxPrice = action.payload.maxPrice;
    },

    setFavorite: (state, action) => {
      const favoriteCar = action.payload;
      const index = state.favoriteCars.findIndex(
        car => car.id === favoriteCar.id
      );

      if (index === -1) {
        state.favoriteCars.push(favoriteCar);
      }
    },

    unsetFavorite: (state, action) => {
      const favoriteCar = action.payload;
      const index = state.favoriteCars.findIndex(
        car => car.id === favoriteCar.id
      );

      if (index !== -1) {
        state.favoriteCars.splice(index, 1);
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCarList.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchCarList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.carList = action.payload;

        if (action.payload.length < 12 || action.payload.length === 0) {
          state.endOfCollection = true;
          Notiflix.Notify.info(
            'You have reached the end of the list of car rental offers'
          );
        }
      })
      .addCase(fetchCarList.rejected, state => {
        state.isLoading = false;
      })
      .addCase(fetchPriceRange.pending, (state, action) => {
        state.minPrice = action.payload.minPrice;
        state.maxPrice = action.payload.maxPrice;
        state.loadingPriceRange = false;
      })
      .addCase(fetchPriceRange.fulfilled, (state, action) => {
        state.minPrice = action.payload.minPrice;
        state.maxPrice = action.payload.maxPrice;
      })
      .addCase(fetchPriceRange.rejected, (state, action) => {
        state.minPrice = 0;
        state.maxPrice = 0;
        state.loadingPriceRange = false;
        state.error = action.error.message;
      });
  },
});

export const {
  setCurrentPage,
  setMinPrice,
  setMaxPrice,
  setBrand,
  setPriceRange,
  setFavorite,
  unsetFavorite,
} = catalogSlice.actions;

export const catalogReducer = catalogSlice.reducer;
