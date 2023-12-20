import { fetchCarList, setCurrentPage } from './slice';

export const loadMoreCars = () => async (dispatch, getState) => {
  const { currentPage, isLoading } = getState().adverts;

  if (!isLoading) {
    try {
      const nextPage = currentPage + 1;
      const response = await dispatch(fetchCarList(nextPage));

      // Проверка наличия данных для следующей страницы
      if (response.payload.length > 0) {
        dispatch(setCurrentPage(nextPage));
      } else {
        // Если данных больше нет, скрываем кнопку Load more
        // (вы можете добавить это действие в ваш срез редуктора)
        // dispatch(setEndOfCollection(true));
      }
    } catch (error) {
      // Обработка ошибок при загрузке данных
    }
  }
};
