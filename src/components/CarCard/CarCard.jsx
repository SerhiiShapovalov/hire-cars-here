import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFavorite } from '../../redux/adverts/slice';
import { selectCarById } from '../../redux/adverts/selectors';
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

const CarCard = ({ carId }) => {
  const dispatch = useDispatch();
  const car = useSelector(state => selectCarById(state, carId));

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
  const [, city, country] = address.split(', ');
  const [functional] = functionalities;
  const [showModal, setShowModal] = useState(false);

  const onShowModal = () => {
    setShowModal(state => !state);
  };

  const handleFavorite = () => {
    dispatch(changeFavorite({ id, isFavorite: !favorite }));
  };

  return (
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
      {showModal && <MoreInfoModal onActive={onShowModal} data={car} />}
      <Button type="button" onClick={onShowModal}>
        Learn more
      </Button>
      <HeartIconButton type="button" onClick={handleFavorite}>
        {favorite
          ? Notiflix.Notify.success('Remove from Favorites')
          : Notiflix.Notify.success('Add to Favorites')}
        <HeartIcon />
      </HeartIconButton>
    </Wrapper>
  );
};

export default CarCard;
