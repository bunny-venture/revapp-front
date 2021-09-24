import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Button } from 'antd';

type ButtonGroupType = {
  fullWidth?: boolean;
};

const StyledButton = styled(Button).withConfig({
  shouldForwardProp: prop => !['fullWidth'].includes(prop),
})<ButtonGroupType>`
  width: 8rem;
  height: 2.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);

  ${props =>
    props.fullWidth &&
    css`
      min-width: 100%;
    `};
`;

StyledButton.propTypes = {
  fullWidth: PropTypes.bool,
};

export default StyledButton;
