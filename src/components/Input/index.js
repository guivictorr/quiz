import styled from 'styled-components';

const Input = styled.input`
  align-self: center;
  width: 100%;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  opacity: 0.8;
  border-radius: ${({ theme }) => theme.normalBorderRadius};
  padding: 15px 20px;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.secondary};
`;

export default Input;
