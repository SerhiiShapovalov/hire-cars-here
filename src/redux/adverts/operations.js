import { fetchCarList, fetchFavorites } from './slice';

export const loadMoreCars = () => (dispatch, getState) => {
  const { currentPage, isLoading } = getState().adverts;
  if (!isLoading) {
    dispatch(fetchCarList(currentPage));
  }
};

export const loadFavorites = () => dispatch => {
  dispatch(fetchFavorites());
};
