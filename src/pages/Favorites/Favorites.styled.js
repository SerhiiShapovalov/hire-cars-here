import styled from 'styled-components';

export const FavoritesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 90px;

  @media (min-width: 768px) {
    margin-top: 100px;
  }

  @media (min-width: 1024px) {
    margin-top: 135px;
  }
`;

export const FavoritesText = styled.p`
  margin-top: 135px;
  text-align: center;
`;
