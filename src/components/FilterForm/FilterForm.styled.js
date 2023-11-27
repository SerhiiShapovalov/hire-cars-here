import styled from 'styled-components';
import { DropListStyle } from '../DropList/DropList.styled';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: end;
  gap: 18px;
  margin-top: 100px;
  margin-bottom: 50px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const MobileFormFieldTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  gap: 18px;

  @media (max-width: 767px) {
    gap: 10px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const MobileFormFieldBottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  gap: 18px;

  @media (max-width: 767px) {
    gap: 10px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Label = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: calc(18 / 14);
  color: #8a8a89;

  @media (max-width: 767px) {
    margin-bottom: 4px;
  }
`;

export const InputWrapper = styled.div`
  margin: 0;
  display: flex;
`;

export const LeftInput = styled.input`
  margin: 0;
  height: 48px;
  width: 160px;
  padding: 0 0 0 24px;
  outline: none;
  font-size: 18px;
  color: #121417;
  font-weight: 500;
  line-height: calc(20 / 18);
  font-family: inherit;
  background: #f7f7fb;
  border-radius: 14px 0px 0px 14px;
  border-top: none;
  border-right: 1px solid rgb(138 138 137 / 0.2);
  border-bottom: none;
  border-left: none;
  box-sizing: border-box;

  @media (max-width: 767px) {
    width: 90px;
    height: 40px;
  }
`;

export const RightInput = styled.input`
  height: 48px;
  width: 160px;
  padding: 0 0 0 24px;
  outline: none;
  font-size: 18px;
  color: #121417;
  font-weight: 500;
  line-height: calc(20 / 18);
  font-family: inherit;
  background: #f7f7fb;
  border-radius: 0px 14px 14px 0px;
  border-top: none;
  border-right: none;
  border-bottom: none;
  border-left: 1px solid rgb(138 138 137 / 0.2);
  box-sizing: border-box;

  @media (max-width: 767px) {
    width: 90px;
    height: 40px;
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
  width: 136px;
  height: 48px;

  &:hover,
  &:focus {
    background-color: #0b44cd;
  }

  @media (max-width: 767px) {
    width: 80px;
    height: 40px;
  }
`;

export const BrandDropListWrapper = styled.div`
  width: 274px;
  height: 48px;

  @media (max-width: 767px) {
    width: 180px;
    height: 40px;
  }

  ${DropListStyle} {
    width: 100%;
    height: 100%;
  }
`;

export const PriceDropListWrapper = styled.div`
  width: 125px;
  height: 48px;

  @media (max-width: 767px) {
    width: 110px;
    height: 40px;
  }

  ${DropListStyle} {
    width: 100%;
    height: 100%;
  }
`;
