import styled from 'styled-components';

const QuizContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export default QuizContainer;
