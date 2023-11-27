import CarList from '../components/CarList/CarList';
import { selectFavoriteCars } from '../redux/adverts/selectors';

import { useSelector } from 'react-redux';

const Favorites = () => {
  const favoriteCars = useSelector(selectFavoriteCars);
  console.log('favoriteCars:', favoriteCars);

  return (
    <div className="favorites-page">
      {favoriteCars.length === 0 ? (
        <p style={{ marginTop: 135, textAlign: 'center' }}>
          Favorite cars have not yet been selected
        </p>
      ) : (
        <CarList data={favoriteCars} />
      )}
    </div>
  );
};

export default Favorites;
