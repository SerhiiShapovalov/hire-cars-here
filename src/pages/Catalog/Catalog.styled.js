import styled from 'styled-components';

export const CatalogContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* margin: 0 auto; */
  width: 100%;

  @media screen and (min-width: 1024px) {
    width: 100vw;
  }
`;
