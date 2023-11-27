import React, { useEffect } from 'react';
import CarCard from '../CarCard/CarCard';
import { CardList } from './CarList.styled';

const CarList = ({ data }) => {
  useEffect(() => {
    console.log('CarList data has been updated:', data);
  }, [data]);
  return (
    <>
      <CardList>
        {data.map(car => (
          <CarCard key={car.id} car={car} />
        ))}
      </CardList>
    </>
  );
};

export default CarList;
