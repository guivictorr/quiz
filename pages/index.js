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

const Input = styled.input`
  align-self: center;
  width: 100%;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  opacity: 0.8;
  border-radius: ${({ theme }) => theme.normalBorderRadius};
  padding: 15px 20px;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.secondary};
`;

const Button = styled.button`
  border-radius: ${({ theme }) => theme.normalBorderRadius};
  background: ${({ theme }) => theme.colors.hover};
  border: none;
  padding: 15px 36px;
  color: ${({ theme }) => theme.colors.contrastText};
  font-weight: bold;
  font-size: 18px;
  box-shadow: 0px 2px 4px rgba(252, 168, 47, 0.4);
  margin-top: 20px;
  width: 100%;
  cursor: pointer;
  transition: all 0.4s ease;
  &:hover {
    transform: scale(0.95);
  }
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
