import homePageImage from 'images/home_300.png';
import { HomeContainer, TextWrap, Title, Span, ImageWrap } from './Home.styled';

const Home = () => {
  return (
    <HomeContainer>
      <TextWrap>
        <Title>Your phone book app</Title>
        <Span>Welcome!</Span>
      </TextWrap>
      <ImageWrap>
        <img src={homePageImage} alt="phonebook" />
      </ImageWrap>
    </HomeContainer>
  );
};

export default Home;
