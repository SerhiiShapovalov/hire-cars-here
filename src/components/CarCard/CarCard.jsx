import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeFavorite } from '../../redux/adverts/slice';
// import { selectCarById } from '../../redux/adverts/selectors';
import MoreInfoModal from '../MoreInfoModal/MoreInfoModal';
import Notiflix from 'notiflix';
import { ReactComponent as HeartIcon } from '../UI/img/heart.svg';
import {
  Button,
  HeartIconButton,
  Image,
  CarCardText,
  CarCardSecondText,
  Span,
  Wrapper,
} from './CarCard.styled';

const CarCard = ({ car }) => {
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);

  if (!car) {
    return null;
  }

  const {
    img,
    description,
    make,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    id,
    favorite,
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

  const handleFavorite = () => {
    dispatch(changeFavorite({ id, isFavorite: !favorite }));
  };

  return (
    <>
      <Wrapper w="274px" relative>
        <Image src={img} alt={description} />
        {favorite && <span>Favorite</span>}
        <div flex jc="space-between">
          <CarCardText>
            {make} <Span>{model}</Span>, {year}
          </CarCardText>
        </div>
        <CarCardText>${rentalPrice}</CarCardText>
        <CarCardSecondText>
          {city} | {country} | {rentalCompany} | {type} | {make} | {id} |{' '}
          {functional}
        </CarCardSecondText>
        <Button type="button" onClick={openModal}>
          Learn more
        </Button>
        <HeartIconButton type="button" onClick={handleFavorite}>
          {favorite
            ? Notiflix.Notify.success('Remove from Favorites')
            : Notiflix.Notify.success('Add to Favorites')}
          <HeartIcon />
        </HeartIconButton>
      </Wrapper>
      {showModal && <MoreInfoModal onClose={closeModal} data={car} />}
    </>
  );
};

export default CarCard;
