import styled from 'styled-components';

const Button = styled.button`
  border-radius: ${({ theme }) => theme.normalBorderRadius};
  background: ${({ theme }) => theme.colors.hover};
  border: none;
  padding: 15px 36px;
  color: ${({ theme }) => theme.colors.contrastText};
  font-weight: bold;
  font-size: 18px;
  box-shadow: 0px 2px 4px rgba(252, 168, 47, 0.4);
  margin-top: 20px;
  width: 100%;
  cursor: pointer;
  transition: all 0.4s ease;
  &:hover {
    transform: scale(0.95);
  }
  &:disabled {
    background-color: grey;
  }
`;

export default Button;
