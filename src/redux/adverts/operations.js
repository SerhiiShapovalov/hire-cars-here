import { fetchCarList } from './slice';

export const loadMoreCars = () => (dispatch, getState) => {
  const { currentPage, isLoading } = getState().adverts;
  if (!isLoading) {
    dispatch(fetchCarList(currentPage));
  }
};
