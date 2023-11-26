import styled from 'styled-components';
import { ReactComponent as HeartIcon } from '../UI/img/heart.svg';

export const Image = styled.img`
  width: 274px;
  height: 268px;
  border-radius: 14px;
  background: linear-gradient(
      180deg,
      rgb(18 20 23 / 0.5) 2.5%,
      rgb(18 20 23 / 0) 41.07%
    ),
    #f3f3f2;
  object-fit: cover;
  object-position: center;
`;

export const HeartIconButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  padding: 0;
  cursor: pointer;
  background: none;
  border: none;
`;

export const IconHeart = styled(HeartIcon)`
  width: 24px;
  height: 24px;
  padding: 0;
  transition: stroke 300ms cubic-bezier(0.4, 0, 0.2, 1),
    fill 300ms cubic-bezier(0.4, 0, 0.2, 1);
  stroke: white;
  fill: none;

  &:hover,
  &:focus {
    stroke: #3470ff;
    fill: #3470ff;
  }

  ${props =>
    props.isFavorite &&
    `
    stroke: #3470ff;
    fill: #3470ff;
  `}
`;

export const CarCardTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 14px;
  margin-bottom: 8px;
  font-size: 16px;
  line-height: calc(24 / 16);
  overflow-wrap: break-word;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const CarCardText = styled.p`
  font-size: 16px;
  line-height: 1.5;
`;

export const CarCardPrice = styled.p`
  font-size: 16px;
  line-height: 1.5;
`;

export const CarCardSecondText = styled.p`
  font-size: 12px;
  font-weight: 400;
  height: 40px;
  line-height: calc(18 / 12);
  color: rgb(18 20 23 / 0.5);
  overflow-wrap: break-word;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const Span = styled.span`
  color: #3470ff;
`;

export const Wrapper = styled.div`
  position: relative;
  width: 274px;
  height: 426px;
  border-top-radius: 14px;
  border-bottom-radius: 12px;
  border: none;
`;

export const Button = styled.button`
  margin-top: 28px;
  color: #fff;
  background-color: #3470ff;
  border-radius: 12px;
  outline: none;
  border: transparent;
  height: 44px;
  width: 100%;
  font-weight: 600;
  cursor: pointer;
  transition: background-color ease-in-out 250ms;

  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;
