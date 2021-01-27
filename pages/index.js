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
          <h1>Um titulo legal</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            porro atque quas recusandae enim iusto. Aperiam recusandae saepe,
            est autem id excepturi odit nostrum nulla velit voluptates commodi
            reiciendis repudiandae.
          </p>
        </Widget>
      </QuizContainer>
    </QuizBackground>
  );
};

export default Home;
