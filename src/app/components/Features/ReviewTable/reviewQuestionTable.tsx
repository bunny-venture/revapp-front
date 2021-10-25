import React from 'react';
import Table from '../../Elements/Table';
import { ColumnsType } from 'antd/es/table';

interface ReviewQuestion {
  key: number;
  name: string;
}

const columns: ColumnsType<ReviewQuestion> = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
    align: 'center',
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    align: 'center',
  },
  {
    title: 'Date Created',
    dataIndex: 'date_created',
    key: 'date_created',
    align: 'center',
  },
  {
    title: 'No. of Items',
    dataIndex: ['options', 'questionCount'],
    key: 'questionCount',
    align: 'center',
  },
  {
    title: 'Question Type',
    dataIndex: 'category',
    key: 'category',
    align: 'center',
  },
  {
    title: 'Subject',
    dataIndex: 'subject',
    key: 'subject',
    align: 'center',
  },
  {
    title: 'Status',
    dataIndex: 'questionnaireStatus',
    key: 'status',
    align: 'center',
  },
  {
    title: 'Last Updated',
    dataIndex: 'lastUpdated',
    key: 'lastUpdated',
    align: 'center',
  },
];

function ReviewQuestionTable({ dataSource, loading }) {
  return (
    <Table
      rowKey="id"
      columns={columns}
      dataSource={dataSource}
      scroll={350}
      size="small"
      loading={loading}
    />
  );
}

export default ReviewQuestionTable;
