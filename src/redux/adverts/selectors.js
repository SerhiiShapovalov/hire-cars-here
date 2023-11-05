export const selectCarList = state => state.adverts.carList;
export const selectCurrentPage = state => state.adverts.currentPage;
export const selectIsLoading = state => state.adverts.isLoading;
export const selectCarById = (state, carId) =>
  state.adverts.carList.find(car => car.id === carId);
