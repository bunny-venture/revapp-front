/**
 *
 * Select
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import { Select, Typography } from 'antd';

export const StyledErrorText = styled(Typography.Text)`
  display: block;
  margin: 0;
`;

const StyledSelect = styled(Select).withConfig({
  shouldForwardProp: prop => ![''].includes(prop),
})`
  border-radius: 0.5rem;
  padding: 0;
  outline: none;
  font-family: 'Quicksand';
  font-size: 0.875rem;
  font-weight: 600;
  width: 100%;

  &:focus {
    box-shadow: 0 0 0 2px rgba(67, 56, 202, 1);
  }
`;

const WrapSelect = ({ field, children, form, ...props }) => {
  const inputProps = { ...props };
  return (
    <Div>
      <StyledSelect {...field} {...inputProps}>
        {children}
      </StyledSelect>

      {field && form.errors[field.name] && (
        <StyledErrorText type="danger">
          {form.errors[field.name]}
        </StyledErrorText>
      )}
    </Div>
  );
};

WrapSelect.propTypes = {
  field: PropTypes.any,
  form: PropTypes.any,
  children: PropTypes.any,
};

export default WrapSelect;

const Div = styled.div``;
