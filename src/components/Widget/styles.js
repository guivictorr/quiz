import { motion } from 'framer-motion';
import styled from 'styled-components';

const WidgetContainer = styled.div`
  header {
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    h1,
    h2,
    h3 {
      color: ${({ theme }) => theme.colors.contrastText};
      font-size: 36px;
    }
  }
`;

WidgetContainer.Content = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.contrastText};
  padding: 32px;
  border-radius: ${({ theme }) => theme.largerBorderRadius};
  width: 464px;
  display: flex;
  flex-direction: column;

  h1,
  h2,
  h3 {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 24px;
  }

  p {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 18px;
  }
`;

export default WidgetContainer;
