import {
  CarCardText,
  CarCardSecondText,
  Span,
} from '../CarCard/CarCard.styled';
import Modal from '../Modal/Modal';
import {
  ButtonCloseWrap,
  CloseIcon,
  Condition,
  ConditionContainer,
  Link,
  MoreInfoWrapper,
} from './MoreInfoModal.styled';

const MoreInfoModal = ({ onClose, onActive, data }) => {
  const {
    img,
    description,
    make,
    model,
    year,
    rentalPrice,
    address,
    mileage,
    type,
    id,
    fuelConsumption,
    engineSize,
    accessories,
    rentalConditions,
  } = data;
  const [, city, country] = address.split(', ');
  const formattedNumber = number => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <Modal onActive={onActive} onClose={onClose}>
      <MoreInfoWrapper>
        <ButtonCloseWrap
          type="button"
          aria-label="close button"
          onClick={onClose}
        >
          <CloseIcon />
        </ButtonCloseWrap>
        <img src={img} alt={description} />
        <CarCardText>
          {make} <Span>{model}</Span>, {year}
        </CarCardText>
        <CarCardSecondText className="second-text">
          {city} | {country} | Id: {id} | Year: {year} | Type: {type} | Fuel
          Consumption: {fuelConsumption} | Engine Size: {engineSize}
        </CarCardSecondText>
        <p className="description-text">{description}</p>
        <p className="subtitle-text">Accessories and functionalities:</p>
        <CarCardSecondText>{accessories.join(' | ')}</CarCardSecondText>
        {rentalConditions.length && (
          <>
            <p className="subtitle-text">Rental Conditions: </p>
            <ConditionContainer>
              {rentalConditions.split('\n').map(condition => {
                if (condition.includes(':')) {
                  const [text, value] = condition.split(':');
                  return (
                    <Condition>
                      {text}: <Span>{value}</Span>
                    </Condition>
                  );
                }
                return <Condition>{condition}</Condition>;
              })}
              <Condition>
                Mileage: <Span>{formattedNumber(+mileage)}</Span>
              </Condition>
              <Condition>
                Price: <Span>{rentalPrice}$</Span>
              </Condition>
            </ConditionContainer>
          </>
        )}
        <Link href="tel:+380730000000">Rental car</Link>
      </MoreInfoWrapper>
    </Modal>
  );
};

export default MoreInfoModal;
