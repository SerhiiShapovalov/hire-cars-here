import styled from 'styled-components';

export const DropListStyle = styled.select`
  font-size: 18px;
  color: #121417;
  font-weight: 500;
  line-height: calc(20 / 18);
  font-family: inherit;
  height: 48px;
  background: #f7f7fb;
  border-radius: 14px;
  border-color: transparent;
  padding-inline: 18px;

  &.brand {
    width: 274px;
  }

  &.price {
    width: 125px;
  }
`;