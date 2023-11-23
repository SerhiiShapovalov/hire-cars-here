import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFavorite, unsetFavorite } from '../../redux/adverts/slice';
import PropTypes from 'prop-types';
import { selectFavoriteCars } from '../../redux/adverts/selectors';
import MoreInfoModal from '../MoreInfoModal/MoreInfoModal';

import {
  Button,
  HeartIconButton,
  IconHeart,
  Image,
  CarCardTextWrapper,
  CarCardText,
  CarCardPrice,
  CarCardSecondText,
  Span,
  Wrapper,
} from './CarCard.styled';

const CarCard = ({ car }) => {
  const dispatch = useDispatch();

  // Move the function inside the component and rename it to useFavoriteCars
  const useFavoriteCars = () => useSelector(selectFavoriteCars) || [];

  const favoriteCars = useFavoriteCars(); // Use the function directly

  const memoizedFavoriteCars = useMemo(() => favoriteCars, [favoriteCars]);

  const [showModal, setShowModal] = useState(false);
  const [isFavorite, setIsFavorite] = useState(
    memoizedFavoriteCars.some(favoriteCar => favoriteCar.id === car.id)
  );

  const {
    id,
    img,
    description,
    make,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    functionalities,
  } = car;

  const [, city, country] = address ? address.split(', ') : ['', ''];
  const [functional] = functionalities || [''];

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  // const handleToggleFavorite = () => {
  //   setIsFavorite(!isFavorite);
  // };

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
    // Dispatch the action after updating the local state
    if (!isFavorite) {
      dispatch(setFavorite(car));
    } else {
      dispatch(unsetFavorite(car.id));
    }
  };

  useEffect(() => {
    if (isFavorite) {
      if (
        !memoizedFavoriteCars.some(favoriteCar => favoriteCar.id === car.id)
      ) {
        dispatch(setFavorite(car));
      }
    } else {
      if (memoizedFavoriteCars.some(favoriteCar => favoriteCar.id === car.id)) {
        dispatch(unsetFavorite(car.id));
      }
    }
  }, [isFavorite, dispatch, memoizedFavoriteCars, car]);

  return (
    <>
      <Wrapper>
        <Image src={img} alt={description} />
        <CarCardTextWrapper>
          <CarCardText>
            {make} <Span>{model}</Span>, {year}
          </CarCardText>
          <CarCardPrice>{rentalPrice}</CarCardPrice>
        </CarCardTextWrapper>

        <CarCardSecondText>
          {city} | {country} | {rentalCompany} | {type} | {make} | {id} |{' '}
          {functional}
        </CarCardSecondText>
        <Button type="button" onClick={openModal}>
          Learn more
        </Button>
        <HeartIconButton type="button" onClick={handleToggleFavorite}>
          {isFavorite ||
          favoriteCars.some(favoriteCar => favoriteCar.id === car.id) ? (
            <IconHeart className={isFavorite} />
          ) : (
            <IconHeart />
          )}
        </HeartIconButton>
      </Wrapper>
      {/* {favorite
        ? Notiflix.Notify.success('Remove from Favorites')
        : Notiflix.Notify.success('Add to Favorites')} */}
      {showModal && <MoreInfoModal onClose={closeModal} data={car} />}
    </>
  );
};

CarCard.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    img: PropTypes.string,
    functionalities: PropTypes.array,
    rentalPrice: PropTypes.string.isRequired,
    rentalCompany: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    // mileage: PropTypes.number.isRequired,
  }).isRequired,
};

export default CarCard;
