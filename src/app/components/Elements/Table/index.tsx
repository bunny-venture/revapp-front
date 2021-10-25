import React from 'react';
import { Table } from 'antd';

function Index({ rowKey, columns, dataSource, scroll, size, loading }) {
  return (
    <Table
      rowKey={rowKey}
      columns={columns}
      dataSource={dataSource}
      scroll={{ y: scroll }}
      size={size}
      pagination={false}
      loading={loading}
    />
  );
}

export default Index;
