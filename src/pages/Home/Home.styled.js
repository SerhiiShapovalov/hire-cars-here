import styled from 'styled-components';

export const HomeContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background-image: url('https://res.cloudinary.com/dqiappxhh/image/upload/v1699082507/technology-vw-skyscraper-tower-factory-warehouse-deep-autos-production-vehicles-abyss-science-fiction-multi-storey-car-park-electrical-wiring-personal-computer-hardware-autombilbau-1113869_g6io8c.jpg');
  background-size: cover;
  overflow: hidden;
`;

export const HomeTitle = styled.h1`
  margin-top: 100px;
  font-weight: 500px;
  font-size: 48px;
  text-align: center;
  position: relative;
  z-index: 1;
  color: #ffffff;
`;

export const HomeText = styled.p`
  font-size: 18px;
  text-align: center;
  margin: 20px 0;
  background: none;
  position: relative;
  z-index: 1;
  color: #ffffff;
`;

export const Overlay = styled.p`
  content: '';
  background: rgba(0, 0, 0, 0.55);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`;
