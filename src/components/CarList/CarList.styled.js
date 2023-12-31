import styled from 'styled-components';

export const CardList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  row-gap: 50px;
  column-gap: 29px;
  margin-bottom: 100px;
  padding: 0 15px;

  @media (min-width: 768px) {
    padding: 0 20px;
  }

  @media (min-width: 1024px) {
    padding: 0 40px;
  }
`;
