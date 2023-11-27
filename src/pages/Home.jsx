import logo192 from '../components/UI/img/logo192.png';

const styles = {
  container: {
    height: 'calc(100vh - 40px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    background: `url('https://res.cloudinary.com/dqiappxhh/image/upload/v1699082507/technology-vw-skyscraper-tower-factory-warehouse-deep-autos-production-vehicles-abyss-science-fiction-multi-storey-car-park-electrical-wiring-personal-computer-hardware-autombilbau-1113869_g6io8c.jpg')`,
    backgroundSize: 'cover',
    padding: '20px',
    overflow: 'hidden',
  },
  title: {
    marginTop: 100,
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
    position: 'relative',
    zIndex: 1,
    color: '#FFFFFF',
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
    margin: '20px 0',
    background: 'none',
    position: 'relative',
    zIndex: 1,
    color: '#FFFFFF',
  },
  overlay: {
    content: '""',
    background: 'rgba(0, 0, 0, 0.55)',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 0,
  },
};

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        Hire cars
        <span role="img">
          <img src={logo192} alt="cars" />
        </span>
        here
      </h1>
      <p style={styles.paragraph}>
        Our website is a place where you can choose a car rental to suit any of
        your needs.
      </p>
      <div style={styles.overlay}></div>
    </div>
  );
};

export default Home;
