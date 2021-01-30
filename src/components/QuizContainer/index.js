import styled from 'styled-components';

const QuizContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;

  @media (max-width: 500px) {
    height: 100%;
  }
`;

export default QuizContainer;
