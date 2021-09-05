/**
 *
 * InputNumber
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { InputNumber, Typography } from 'antd';
import { ErrorMessage } from 'formik';

const { Text } = Typography;

export const FormInputNumber = ({ field, form, type, ...props }) => {
  const inputProps = { ...props };
  return (
    <>
      <StyledInputNumber {...field} {...inputProps} />

      {field && (
        <ErrorMessage
          name={field.name}
          render={msg => <Text type="danger">{msg}</Text>}
        />
      )}
    </>
  );
};

export const StyledInputNumber = styled(InputNumber)`
  width: 100%;
`;
