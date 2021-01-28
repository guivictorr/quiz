import styled from 'styled-components';
import QuizBackground from '../src/components/QuizBackground';
import Widget from '../src/components/Widget';
import Button from '../src/components/Button';
import Input from '../src/components/Input';
import { bg } from '../db.json';

const QuizContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`;

const Home = () => {
  return (
    <QuizBackground backgroundImage={bg}>
      <QuizContainer>
        <Widget.Header>
          <h1>COUNTRY QUIZ</h1>
        </Widget.Header>
        <Widget>
          <h1>Deixe-me te conhecer melhor, qual seu nome ?</h1>
          <form>
            <Input type="text" />
            <Button type="submit">Jogar</Button>
          </form>
        </Widget>
      </QuizContainer>
    </QuizBackground>
  );
};

export default Home;
