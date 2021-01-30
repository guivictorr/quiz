import styled from 'styled-components';

const WidgetContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.contrastText};
  padding: 32px;
  border-radius: ${({ theme }) => theme.largerBorderRadius};
  width: 464px;
  height: auto;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 500px) {
    transform: scale(0.7);
  }

  h1,
  h2,
  h3 {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 24px;
  }

  p {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 18px;
  }
`;

WidgetContainer.Header = styled.header`
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media screen and (max-width: 500px) {
    margin-top: 20px;
  }

  h1,
  h2,
  h3 {
    color: ${({ theme }) => theme.colors.contrastText};
    font-size: 36px;
  }
`;

export default WidgetContainer;
