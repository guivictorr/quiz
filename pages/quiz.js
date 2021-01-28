import { useState } from 'react';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Widget from '../src/components/Widget';
import { bg, questions } from '../db.json';
import QuestionWidget from '../src/components/QuestionWidget';

const Quiz = () => {
  const totalQuestions = questions.length;
  const [questionIndex, setQuestionIndex] = useState(0);
  const question = questions[questionIndex];

  const handleQuestionSubmit = () => {
    if (questionIndex < totalQuestions) {
      setQuestionIndex(questionIndex + 1);
    }
  };
  return (
    <QuizBackground backgroundImage={bg}>
      <QuizContainer>
        <Widget.Header>
          <h1>COUNTRY QUIZ</h1>
        </Widget.Header>
        <Widget>
          {questionIndex < totalQuestions ? (
            <QuestionWidget
              question={question}
              totalQuestions={totalQuestions}
              questionIndex={questionIndex}
              onSubmit={handleQuestionSubmit}
            />
          ) : (
            <>
              <h1>Tela de resultado</h1>
            </>
          )}
        </Widget>
      </QuizContainer>
    </QuizBackground>
  );
};

export default Quiz;
