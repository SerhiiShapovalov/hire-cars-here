import styled from 'styled-components';

export const DropListStyle = styled.select`
  font-size: 18px;
  color: #121417;
  font-weight: 500;
  line-height: calc(20 / 18);
  font-family: inherit;
  background: #f7f7fb;
  border-radius: 14px;
  border-color: transparent;
  padding-inline: 18px;

  @media (max-width: 767px) {
    height: 40px;
  }
`;
