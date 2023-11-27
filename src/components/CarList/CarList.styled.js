import styled from 'styled-components';

export const CardList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  row-gap: 50px;
  column-gap: 29px;
  margin-bottom: 100px;

  .favorites-page & {
    margin-top: 135px;
  }
`;
