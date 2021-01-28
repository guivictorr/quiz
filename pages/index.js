import styled from 'styled-components';
import { useState } from 'react';
import { useRouter } from 'next/router';
import QuizBackground from '../src/components/QuizBackground';
import Widget from '../src/components/Widget';
import Button from '../src/components/Button';
import Input from '../src/components/Input';
import Error from '../src/components/Error';
import { bg } from '../db.json';

const QuizContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`;

const Home = () => {
  const [playerName, setPlayerName] = useState();
  const [error, setError] = useState('');
  const { push } = useRouter();

  const handleOnSubmit = event => {
    event.preventDefault();

    if (!playerName) {
      setError('Não seja tímido, qual seu nome ?');
      return;
    }

    setError('');
    push(`/quiz?name=${playerName}`);
  };

  const handlePlayerName = event => {
    const inputValue = event.target.value;
    setPlayerName(inputValue);
  };

  return (
    <QuizBackground backgroundImage={bg}>
      <QuizContainer>
        <Widget.Header>
          <h1>COUNTRY QUIZ</h1>
        </Widget.Header>
        <Widget>
          <h1>Deixe-me te conhecer melhor, qual seu nome ?</h1>
          <form onSubmit={handleOnSubmit}>
            <Input type="text" onChange={handlePlayerName} />
            {error && <Error>{error}</Error>}
            <Button type="submit">Jogar</Button>
          </form>
        </Widget>
      </QuizContainer>
    </QuizBackground>
  );
};

export default Home;
