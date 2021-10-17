import React from 'react';
import { Pagination } from 'antd';
import styled from 'styled-components';

const PagePagination = ({
  defaultCurrent,
  defaultPageSize,
  total,
  onChange,
}) => {
  const StyledPagination = styled(Pagination)`
    padding-bottom: 50px;
  `;

  return (
    <StyledPagination
      defaultCurrent={defaultCurrent}
      defaultPageSize={defaultPageSize}
      total={total}
      onChange={onChange}
    />
  );
};

export default PagePagination;
