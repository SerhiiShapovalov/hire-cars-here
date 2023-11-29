import CarList from '../../components/CarList/CarList';
import { selectFavoriteCars } from '../../redux/adverts/selectors';
import { useSelector } from 'react-redux';
import { FavoritesContainer, FavoritesText } from './Favorites.styled';

const Favorites = () => {
  const favoriteCars = useSelector(selectFavoriteCars);
  console.log('favoriteCars:', favoriteCars);

  return (
    <FavoritesContainer>
      {favoriteCars.length === 0 ? (
        <FavoritesText>Favorite cars have not yet been selected</FavoritesText>
      ) : (
        <CarList data={favoriteCars} />
      )}
    </FavoritesContainer>
  );
};

export default Favorites;
