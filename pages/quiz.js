import { useState } from 'react';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Widget from '../src/components/Widget';
import { bg, questions } from '../db.json';
import QuestionWidget from '../src/components/QuestionWidget';

const Quiz = () => {
  const [isQuestionSubmited, setIsQuestionSubmited] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isCorrect, setIsCorrect] = useState(undefined);
  const totalQuestions = questions.length;
  const question = questions[questionIndex];

  const handleQuestionSubmit = index => {
    setIsQuestionSubmited(true);
    const { answer } = question;

    if (index === answer) {
      setIsCorrect(true);
      setScore(score + 1);
    }

    if (questionIndex < totalQuestions) {
      setTimeout(() => {
        setQuestionIndex(questionIndex + 1);
        setIsQuestionSubmited(false);
        setIsCorrect(undefined);
      }, 2000);
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
              <h1>
                Você acertou
                {score}
              </h1>
            </>
          )}
          {isQuestionSubmited && isCorrect && <p>Você acertou</p>}
          {isQuestionSubmited && !isCorrect && <p>Você errou</p>}
        </Widget>
      </QuizContainer>
    </QuizBackground>
  );
};

export default Quiz;
