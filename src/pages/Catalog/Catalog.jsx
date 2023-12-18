import React, {
  // useEffect,
  useCallback,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectCarList,
  selectCurrentPage,
  selectIsLoading,
} from '../../redux/adverts/selectors';
import { setCurrentPage } from '../../redux/adverts/slice';
import { loadMoreCars } from '../../redux/adverts/operations';
import FilterForm from '../../components/FilterForm/FilterForm';
import CarList from '../../components/CarList/CarList';
import Loader from '../../components/Loader/Loader';
import { CatalogContainer, LinkButton } from './Catalog.styled';

const Catalog = () => {
  const dispatch = useDispatch();
  const carList = useSelector(selectCarList);
  const currentPage = useSelector(selectCurrentPage);
  const isLoading = useSelector(selectIsLoading);

  // useEffect(() => {
  //   // Add any additional logic here that should run when carList changes
  //   console.log('CarList has been updated:', carList);
  // }, [carList]);

  const loadMore = useCallback(() => {
    if (!isLoading) {
      dispatch(setCurrentPage(currentPage + 1));
      dispatch(loadMoreCars());
    }
  }, [dispatch, currentPage, isLoading]);

  return (
    <CatalogContainer>
      <FilterForm />
      {!isLoading ? <CarList data={carList} /> : <Loader />}

      {!isLoading && (
        <LinkButton type="button" onClick={loadMore}>
          Load more
        </LinkButton>
      )}
    </CatalogContainer>
  );
};

export default Catalog;
