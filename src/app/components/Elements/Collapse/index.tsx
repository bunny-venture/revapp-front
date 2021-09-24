/**
 *
 * Collapse
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { Collapse } from 'antd';
import PropTypes from 'prop-types';

interface Props {}

const StyledCollapse = styled(Collapse)`
  .ant-collapse > .ant-collapse-item > .ant-collapse-header {
    color: #fff;
  }
  .ant-collapse-header-text {
    color: #fff !important;
  }
  width: 400px;
  color: white;
  border-radius: 8px;
`;

const WrapCollapse = ({ children, collapsible, defaultActiveKey }) => {
  return (
    <Div>
      <StyledCollapse
        collapsible={collapsible}
        defaultActiveKey={defaultActiveKey}
      >
        {children}
      </StyledCollapse>
    </Div>
  );
};

WrapCollapse.propTypes = {
  children: PropTypes.any,
  collapsible: PropTypes.any,
  defaultActiveKey: PropTypes.any,
};

export default WrapCollapse;

const Div = styled.div``;
