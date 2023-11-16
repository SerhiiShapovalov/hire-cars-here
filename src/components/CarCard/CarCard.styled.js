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

  // &.favorite {
  //   stroke: #3470ff;
  //   fill: #3470ff;
  // }
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

  &.favorite {
    stroke: #3470ff;
    fill: #3470ff;
  }
`;

export const CarCardText = styled.p`
  margin-top: 14px;
  margin-bottom: 8px;
  font-size: 16px;
  line-height: calc(24 / 16);
  overflow-wrap: break-word;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const CarCardSecondText = styled.p`
  font-size: 12px;
  font-weight: 400;
  max-height: 40px;
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
  ${props => props.flex && `display: flex;`}
  ${props => props.block && `display: block;`}
  ${props => props.inline && `display: inline;`}
  ${props => props.inBlock && `display: inline-block;`}
  
  ${props =>
    props.jc &&
    `
    justify-content: ${props.jc};
  `}

  ${props =>
    props.ai &&
    `
    align-items: ${props.ai};
  `}

   ${props =>
    props.gap &&
    `
    gap: ${props.gap};
  `}

${props => props.w && `width: ${props.w};`}
${props => props.h && `height: : ${props.h};`}
${props => props.minW && `min-width: ${props.w};`}
${props => props.minH && `min-height: ${props.h};`}
${props => props.maxW && `max-width: ${props.w};`}
${props => props.maxH && `max-height: ${props.h};`}


  ${props => props.outline && `outline: 1px red solid;`}

${props => props.relative && `position: relative;`}
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
  transition: background-color ease-in-out 250ms;

  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;
