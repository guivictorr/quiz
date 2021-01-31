import { useState } from 'react';
import { motion } from 'framer-motion';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Widget from '../src/components/Widget';
import QuestionWidget from '../src/components/QuestionWidget';
import ResultWidget from '../src/components/ResultWidget';
import { bg, questions } from '../db.json';
import animations from '../src/animations';

const Quiz = () => {
  const screenStates = {
    QUIZ: 'QUIZ',
    RESULT: 'RESULT',
  };

  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [screenState, setScreenState] = useState(screenStates.QUIZ);
  const totalQuestions = questions.length;
  const question = questions[questionIndex];

  const handleAddScore = () => {
    setScore(score + 1);
  };

  const handleNextQuestion = () => {
    const nextQuestion = questionIndex + 1;

    if (nextQuestion < totalQuestions) {
      setQuestionIndex(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  };

  return (
    <QuizBackground backgroundImage={bg}>
      <QuizContainer
        as={motion.div}
        variants={animations.slideFromBottom}
        initial="initial"
        animate="final"
      >
        <Widget>
          {screenState === screenStates.QUIZ && (
            <QuestionWidget
              question={question}
              totalQuestions={totalQuestions}
              questionIndex={questionIndex}
              nextQuestion={handleNextQuestion}
              addScore={handleAddScore}
            />
          )}

          {screenState === screenStates.RESULT && (
            <ResultWidget score={score} />
          )}
        </Widget>
      </QuizContainer>
    </QuizBackground>
  );
};

export default Quiz;
