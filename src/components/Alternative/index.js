import AlternativeContainer from './styles';

const Alternative = ({
  id,
  alternative,
  alternativeIndex,
  onChange,
  questionId,
  isSelected,
  isQuestionSubmited,
  alternativeStatus,
}) => {
  return (
    <AlternativeContainer
      htmlFor={id}
      data-selected={isSelected}
      data-status={isQuestionSubmited && alternativeStatus}
    >
      <input
        onChange={() => onChange(alternativeIndex)}
        name={questionId}
        id={id}
        type="radio"
      />
      {alternative}
    </AlternativeContainer>
  );
};

export default Alternative;
