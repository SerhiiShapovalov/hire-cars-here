import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 18px;
  margin-bottom: 50px;
`;

export const Label = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: calc(18 / 14);
  color: #8a8a89;
`;

export const Input = styled.input`
  font-size: 18px;
  color: #121417;
  font-weight: 500;
  line-height: calc(20 / 18);
  height: 48px;
  width: 160px;
  padding-inline: 18px;
  outline: none;
  border-color: transparent;
  background: #f7f7fb;

  &.left {
    border-radius: 0px 14px 14px 0px;
    border-left: 1px solid rgb(138 138 137 / 0.2);
  }

  &.right {
    border-radius: 14px 0px 0px 14px;
    border-right: 1px solid rgb(138 138 137 / 0.2);
  }
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  color: #fff;
  background-color: #3470ff;
  border-radius: 12px;
  outline: none;
  border: transparent;
  font-weight: 600;
  transition: background-color ease-in-out 250ms;

  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
  width: 136px;
  height: 48px;
`;
