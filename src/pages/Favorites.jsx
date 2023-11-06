import { CarList } from 'components/CarList/CarList';
import { selectCarList } from '../redux/adverts/selectors';
import { loadFavorites } from '../redux/adverts/operations';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export const Favorites = () => {
  const dispatch = useDispatch();
  const carList = useSelector(selectCarList);

  useEffect(() => {
    dispatch(loadFavorites());
  }, [dispatch]);

  return (
    <>
      {carList.length === 0 ? (
        <p>Favorite cars have yet to be chosen</p>
      ) : (
        <CarList data={carList} />
      )}
    </>
  );
};
