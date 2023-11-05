import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectCarList,
  selectCurrentPage,
  selectIsLoading,
} from '../redux/adverts/selectors';
import { setCurrentPage } from '../redux/adverts/slice';
import { loadMoreCars } from '../redux/adverts/operations';
import { FilterForm } from '../components/FilterForm/FilterForm';
import { CarList } from '../components/CarList/CarList';
import { LinkButton } from '../components/MoreInfoModal/MoreInfoModal.styled';

export const Catalog = () => {
  const dispatch = useDispatch();
  const carList = useSelector(selectCarList);
  const currentPage = useSelector(selectCurrentPage);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    if (carList.length > 0) {
      dispatch(setCurrentPage(currentPage + 1));
    }
  }, [carList, dispatch, currentPage]);

  useEffect(() => {
    dispatch(loadMoreCars());
  }, [currentPage, dispatch]);

  return (
    <>
      <FilterForm />
      {!isLoading ? <CarList data={carList} /> : <div>Loading...</div>}

      {!isLoading && (
        <LinkButton type="button" onClick={() => dispatch(loadMoreCars())}>
          Load More
        </LinkButton>
      )}
    </>
  );
};
