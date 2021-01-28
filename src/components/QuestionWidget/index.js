import Alternative from '../Alternative';

const QuestionWidget = ({ questionIndex, totalQuestions, question }) => {
  return (
    <>
      <p>{`Pergunta ${questionIndex + 1} de ${totalQuestions}`}</p>
      <h1>{question.title}</h1>
      <p>{question.description}</p>
      {question.alternatives.map(item => (
        <Alternative key={item}>{item}</Alternative>
      ))}
    </>
  );
};

export default QuestionWidget;
