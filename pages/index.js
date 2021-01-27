import styled from 'styled-components';
import QuizBackground from '../src/components/QuizBackground';
import Widget from '../src/components/Widget';
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
          <h1>Kuala Lumpur is the capital of</h1>
        </Widget>
      </QuizContainer>
    </QuizBackground>
  );
};

export default Home;
