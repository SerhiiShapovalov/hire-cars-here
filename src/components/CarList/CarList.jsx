import CarCard from '../CarCard/CarCard';
import { CardList } from './CarListStyled';

const CarList = ({ data = [] }) => {
  return (
    <>
      <CardList>
        {data.map(car => {
          return (
            <li key={car.id}>
              <CarCard car={car} />
            </li>
          );
        })}
      </CardList>
    </>
  );
};

export default CarList;
