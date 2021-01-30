import styled from 'styled-components';

const QuizBackground = styled.div`
  width: 100%;
  background-size: cover;
  background-position: center;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 500px) {
    overflow: hidden;
  }
`;

export default QuizBackground;
