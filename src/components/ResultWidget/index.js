import { useRouter } from 'next/router';
import styled from 'styled-components';

const ResultWidgetContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 48px;
  }

  p {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 18px;

    strong {
      font-size: 36px;
      color: ${({ theme }) => theme.colors.success};
    }
  }

  button {
    border: 2px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    width: 300px;
    font-size: 18px;
    padding: 18px 60px;
    border-radius: ${({ theme }) => theme.largerBorderRadius};
    font-weight: bold;
    background: transparent;
    cursor: pointer;
    transition: all 0.4s ease;
    &:hover {
      transform: scale(0.9);
    }
  }
`;

const ResultWidget = ({ score }) => {
  const {
    back,
    query: { name },
  } = useRouter();

  return (
    <ResultWidgetContainer>
      <h1>Resultado</h1>
      <p>
        {`${name} você acertou `}
        <strong>{` ${score} `}</strong>
        questões
      </p>
      <button onClick={() => back()} type="button">
        Tentar novamente
      </button>
    </ResultWidgetContainer>
  );
};

export default ResultWidget;
