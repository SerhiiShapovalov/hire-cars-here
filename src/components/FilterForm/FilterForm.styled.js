import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: end;
  flex-direction: column;
  gap: 10px;
  margin-top: 100px;
  margin-bottom: 50px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px 10px 0 10px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: start;
    gap: 18px;
  }
`;

export const MobileFormFieldTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  gap: 10px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    gap: 18px;
    margin-left: 0;
    margin-right: 0;
  }
`;

export const MobileFormFieldBottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  gap: 10px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    flex-wrap: wrap;
    justify-content: end;
    gap: 18px;
    margin-left: 0;
    margin-right: 0;
    width: 320px;
  }

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
    gap: 18px;
    width: auto;
  }
`;

export const Label = styled.label`
  margin-bottom: 4px;
  font-size: 14px;
  font-weight: 500;
  line-height: calc(18 / 14);
  color: #8a8a89;

  @media (min-width: 768px) {
    margin-bottom: 8px;
  }
`;

export const InputWrapper = styled.div`
  margin: 0;
  display: flex;
`;

export const LeftInput = styled.input`
  margin: 0;
  height: 40px;
  width: 90px;
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
  caret-color: #0b44cd;

  @media (min-width: 768px) {
    height: 48px;
    width: 160px;
  }

  &::placeholder {
    color: #121417;
  }
`;

export const RightInput = styled.input`
  margin: 0;
  height: 40px;
  width: 90px;
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
  caret-color: #0b44cd;

  @media (min-width: 768px) {
    height: 48px;
    width: 160px;
  }

  &::placeholder {
    color: #121417;
  }
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  width: 80px;
  height: 40px;
  color: #fff;
  background-color: #3470ff;
  border-radius: 12px;
  outline: none;
  border: transparent;
  font-weight: 600;
  transition: background-color ease-in-out 250ms;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #0b44cd;
  }

  @media (min-width: 768px) {
    width: 136px;
    height: 48px;
    margin-left: auto;
  }

  @media (min-width: 1024px) {
    margin-left: 0;
  }
`;

export const BrandDropListWrapper = styled.div`
  width: 180px;
  height: 40px;

  @media (min-width: 768px) {
    width: 225px;
    height: 48px;
  }

  @media (min-width: 1024px) {
    width: 274px;
  }
`;

export const PriceDropListWrapper = styled.div`
  width: 110px;
  height: 40px;

  @media (min-width: 768px) {
    width: 125px;
    height: 48px;
  }
`;
