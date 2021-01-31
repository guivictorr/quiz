import { useState } from 'react';
import Alternative from '../Alternative';
import Button from '../Button';

import QuestionWidgetContainer from './styles';

const QuestionWidget = ({
  questionIndex,
  totalQuestions,
  question,
  nextQuestion,
  addScore,
}) => {
  const [isQuestionSubmited, setIsQuestionSubmited] = useState(false);
  const [selectedAlternative, setSelectedAlternative] = useState(undefined);

  const { title, description, alternatives, answer } = question;
  const hasAlternativeSelected = selectedAlternative !== undefined;
  const isCorrect = selectedAlternative === answer;
  const questionId = `question_${questionIndex}`;

  const handleQuestionSubmit = event => {
    event.preventDefault();
    setIsQuestionSubmited(true);

    if (isCorrect) {
      addScore();
    }

    setTimeout(() => {
      nextQuestion();
      setIsQuestionSubmited(false);
      setSelectedAlternative(undefined);
    }, 2000);
  };

  return (
    <QuestionWidgetContainer onSubmit={handleQuestionSubmit}>
      <strong>{`Pergunta ${questionIndex + 1} de ${totalQuestions}`}</strong>
      <h1>{title}</h1>
      <p>{description}</p>
      {alternatives.map((item, index) => {
        const alternativeId = `alternative_${index}`;
        const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
        const isSelected = selectedAlternative === index;
        return (
          <Alternative
            key={alternativeId}
            alternative={item}
            onChange={setSelectedAlternative}
            alternativeIndex={index}
            questionId={questionId}
            isSelected={isSelected}
            isQuestionSubmited={isQuestionSubmited}
            alternativeStatus={alternativeStatus}
          />
        );
      })}
      <Button type="submit" disabled={!hasAlternativeSelected}>
        Confirmar
      </Button>
    </QuestionWidgetContainer>
  );
};

export default QuestionWidget;
