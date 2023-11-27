import styled from 'styled-components';

export const LinkButton = styled.button`
  display: block;
  margin-bottom: 150px;
  margin-inline: auto;
  line-height: 24px;
  font-size: 18px;
  background-color: transparent;
  text-decoration: underline;
  outline: none;
  border: none;
  color: #3470ff;
  cursor: pointer;  
  transition: background-color ease-in-out 250ms;

  &:hover,
  &:focus {
    color: #0b44cd;
  }
`;