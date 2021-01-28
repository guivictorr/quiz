import styled from 'styled-components';

const Alternative = styled.button`
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.normalBorderRadius};
  padding: 15px 20px;
  background: transparent;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 18px;
  transition: all 0.4s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
    border-color: ${({ theme }) => theme.colors.hover};
    color: ${({ theme }) => theme.colors.contrastText};
  }

  & + button {
    margin-top: 20px;
  }
`;

export default Alternative;
