import styled from 'styled-components';

export const Input = styled.input`
  outline: none;
  width: 100%;
  padding: 0.6rem 0.5rem;
  border: 1px solid #9ca3af;
  border-radius: 0.375rem;
  background-color: #f9fafb;
  font-size: 0.9rem;
  font-weight: 600;

  &:focus {
    border: 2px solid #4338ca;
    background-color: #fff;
  }
`;
