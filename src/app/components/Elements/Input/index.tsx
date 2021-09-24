import React from 'react';
import styled from 'styled-components';
import { Typography, Input } from 'antd';
import { ErrorMessage } from 'formik';

const { Text } = Typography;

export const StyledInput = styled(Input)`
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

/* istanbul ignore next */
export const StyledErrorText = styled(Text)`
  display: block;
  margin: 0;
`;

export const FormInput = ({ field, form, type, ...props }) => {
  const inputProps = { ...props };
  return (
    <div>
      {type === 'password' ? (
        <StyledInput {...field} type={type} {...inputProps} />
      ) : (
        <StyledInput {...field} type={type} {...inputProps} />
      )}

      {field && (
        <ErrorMessage
          name={field.name}
          render={msg => <StyledErrorText type="danger">{msg}</StyledErrorText>}
        />
      )}
    </div>
  );
};
