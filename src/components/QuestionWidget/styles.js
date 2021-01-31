import styled from 'styled-components';
import { motion } from 'framer-motion';

const QuestionWidgetContainer = styled(motion.form)`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  strong {
    color: ${({ theme }) => theme.colors.secondary};
    opacity: 0.4;
  }
`;

export default QuestionWidgetContainer;
