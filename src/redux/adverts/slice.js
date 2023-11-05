import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCarList = createAsyncThunk(
  'adverts/fetchCarList',
  async (page, { getState }) => {
    const { limit } = getState().adverts;
    const response = await axios.get(
      `https://64d66ed22a017531bc12a15a.mockapi.io/api/adverts?page=${page}&limit=${limit}`
    );
    return response.data;
  }
);

export const fetchFavorites = createAsyncThunk(
  'favorites/fetchFavorites',
  async () => {
    const response = await axios.get(
      'https://64d66ed22a017531bc12a15a.mockapi.io/api/adverts?favorite=true'
    );
    return response.data;
  }
);

export const changeFavorite = createAsyncThunk(
  'adverts/changeFavorite',
  async (carId, { getState, dispatch }) => {
    const state = getState();
    const { carList } = state.adverts;
    const car = carList.find(car => car.id === carId);

    if (!car) {
      return;
    }

    try {
      const response = await axios.put(
        `https://64d66ed22a017531bc12a15a.mockapi.io/api/adverts/${carId}`,
        { favorite: !car.favorite }
      );
      const updatedCar = response.data;
      dispatch(updatedCar(updatedCar));
    } catch (error) {}
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
    isLoading: false,
    minPrice: 0,
    maxPrice: 0,
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
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCarList.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchCarList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.carList = [...state.carList, ...action.payload];
        state.currentPage++;
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

export const { setCurrentPage } = catalogSlice.actions;
export const { setMinPrice, setMaxPrice } = catalogSlice.actions;

export const catalogReducer = catalogSlice.reducer;
