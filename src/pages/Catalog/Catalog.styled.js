import styled from 'styled-components';

export const CatalogContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LinkButton = styled.button`
  margin: 0 auto 150px;
  padding: 0;
  line-height: 24px;
  font-size: 18px;
  background-color: transparent;
  text-decoration: underline;
  border: none;
  color: #3470ff;
  cursor: pointer;
  transition: background-color ease-in-out 250ms;

  &:hover,
  &:focus {
    color: #0b44cd;
  }
`;
