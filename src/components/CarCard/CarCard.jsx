import React, { useState } from 'react';
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
  const dispatch = useDispatch();

  const favoriteCars = useSelector(selectFavoriteCars) || [];

  const isFavorite = favoriteCars.some(
    favoriteCar => favoriteCar.id === car.id
  );

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(unsetFavorite(car));
    } else {
      dispatch(setFavorite(car));
    }
  };

  const [, city, country] = address ? address.split(', ') : ['', ''];
  const [functional] = functionalities || [''];

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

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
        <HeartIconButton
          type="button"
          aria-label="Add to favorites"
          onClick={handleToggleFavorite}
        >
          <IconHeart
            style={isFavorite ? { stroke: '#0B44CD', fill: '#0B44CD' } : {}}
          />
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
