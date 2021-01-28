import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Widget from '../src/components/Widget';
import { bg, questions } from '../db.json';
import Alternative from '../src/components/Alternative';

const Quiz = () => {
  const totalQuestions = questions.length;
  const questionIndex = 0;
  const question = questions[questionIndex];
  return (
    <QuizBackground backgroundImage={bg}>
      <QuizContainer>
        <Widget.Header>
          <h1>COUNTRY QUIZ</h1>
        </Widget.Header>
        <Widget>
          <p>{`Pergunta ${questionIndex + 1} de ${totalQuestions}`}</p>
          <h1>{question.title}</h1>
          <p>{question.description}</p>
          {question.alternatives.map(item => (
            <Alternative>{item}</Alternative>
          ))}
        </Widget>
      </QuizContainer>
    </QuizBackground>
  );
};

export default Quiz;
