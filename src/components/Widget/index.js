import styled from 'styled-components';

const Widget = styled.div`
  background-color: ${({ theme }) => theme.colors.contrastText};
  padding: 32px;
  border-radius: ${({ theme }) => theme.largerBorderRadius};
  width: 464px;
  height: auto;

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

Widget.Header = styled.header`
  width: 464px;
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
`;

export default Widget;
