import AlternativeContainer from './styles';

const Alternative = ({
  key,
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
      htmlFor={key}
      data-selected={isSelected}
      data-status={isQuestionSubmited && alternativeStatus}
    >
      <input
        onChange={() => onChange(alternativeIndex)}
        name={questionId}
        id={key}
        type="radio"
      />
      <p>{alternative}</p>
    </AlternativeContainer>
  );
};

export default Alternative;
