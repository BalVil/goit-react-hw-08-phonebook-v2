import homePageImage from 'images/home_300.png';
import { HomeContainer, Title } from './Home.styled';

const Home = () => {
  return (
    <HomeContainer>
      <Title>Welcome to your phone book app!</Title>
      <div>
        <img src={homePageImage} alt="phonebook" />
      </div>
    </HomeContainer>
  );
};

export default Home;
