import CarList from '../components/CarList/CarList';
import { selectFavoriteCars } from '../redux/adverts/selectors';

import { useSelector } from 'react-redux';

const Favorites = () => {
  const favoriteCars = useSelector(selectFavoriteCars);

  return (
    <>
      {favoriteCars.length === 0 ? (
        <p>Favorite cars have not yet been selected</p>
      ) : (
        <CarList data={favoriteCars} />
      )}
    </>
  );
};

export default Favorites;
