/**
 *
 * List
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { List } from 'antd';

const StyledList = styled(List)``;

export function Lists({ dataSource, renderItem }) {
  return (
    <StyledList
      itemLayout="horizontal"
      dataSource={dataSource}
      renderItem={renderItem}
    />
  );
}
