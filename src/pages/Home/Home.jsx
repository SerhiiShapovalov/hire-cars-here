import logo192 from '../../components/UI/img/logo192.png';
import { HomeContainer, HomeTitle, HomeText, Overlay } from './Home.styled.js';

const Home = () => {
  return (
    <HomeContainer>
      <HomeTitle>
        Hire cars
        <span role="img">
          <img src={logo192} alt="cars" />
        </span>
        here
      </HomeTitle>
      <HomeText>
        Our website is a place where you can choose a car rental to suit any of
        your needs.
      </HomeText>
      <Overlay></Overlay>
    </HomeContainer>
  );
};

export default Home;
