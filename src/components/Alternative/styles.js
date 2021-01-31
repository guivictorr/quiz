import styled from 'styled-components';

const AlternativeContainer = styled.label`
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.normalBorderRadius};
  background: transparent;
  padding: 15px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.secondary};
  transition: all 0.4s ease;
  width: 100%;
  opacity: 0.7;
  text-align: center;
  font-size: 18px;

  input {
    display: none;
  }

  &[data-selected='true'] {
    background-color: ${({ theme }) => theme.colors.hover};
    border-color: ${({ theme }) => theme.colors.hover};
    opacity: 1;
    color: ${({ theme }) => theme.colors.contrastText};

    &[data-status='SUCCESS'] {
      background-color: ${({ theme }) => theme.colors.success};
      border-color: ${({ theme }) => theme.colors.success};
      color: ${({ theme }) => theme.colors.contrastText};
    }

    &[data-status='ERROR'] {
      background-color: ${({ theme }) => theme.colors.wrong};
      border-color: ${({ theme }) => theme.colors.wrong};
      color: ${({ theme }) => theme.colors.contrastText};
    }
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
    border-color: ${({ theme }) => theme.colors.hover};
    color: ${({ theme }) => theme.colors.contrastText};
  }

  & + label {
    margin-top: 20px;
  }
`;

export default AlternativeContainer;
