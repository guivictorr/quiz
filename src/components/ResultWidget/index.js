import { useRouter } from 'next/router';
import Confetti from 'react-confetti';
import Winner from '../Winner';

import ResultWidgetContainer from './styles';

const ResultWidget = ({ score }) => {
  const {
    back,
    query: { name },
  } = useRouter();

  return (
    <>
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        recycle={false}
      />
      <ResultWidgetContainer>
        <Winner />
        <strong>Resultado</strong>
        <p>
          {`${name} você acertou `}
          <strong>{` ${score} `}</strong>
          questões
        </p>
        <button onClick={() => back()} type="button">
          Tentar novamente
        </button>
      </ResultWidgetContainer>
    </>
  );
};

export default ResultWidget;
