import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Collapse, Space, Row, Col } from 'antd';
import { Formik, Form, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { StyledCard } from '../../components/Elements/Card';
import { Wrapper } from '../../components/Elements/Wrapper';
import { Title } from '../../components/Elements/Typography/Title';
import Button from '../../components/Elements/Button/StyledButton';
import { FormInput } from '../../components/Elements/Input';
import ActionDialogModal from '../../components/Elements/Modals/ActionDialogModal';
import CustomCollapse from '../../components/Elements/Collapse';
import { useRecapSlice } from './slice';
import { selectQuestions } from './slice/selectors';

const { Panel } = Collapse;

export function RecapPage() {
  const dispatch = useDispatch();
  const { actions } = useRecapSlice();

  const [isVisible, setIsVisible] = useState(false);

  const allQuestions = useSelector(selectQuestions);

  useEffect(() => {
    dispatch(actions.getQuestionnaire());
  }, []);

  const onSubmit = payload => {
    dispatch(actions.doVoucher(payload));
    console.log('here');
  };

  const onSubmitVoucher = () => {};

  const handleCancel = () => {
    setIsVisible(false);
  };

  const recapQuestion = allQuestions.map(questions => (
    <Link to="/recap/question-set-1">{questions.id}</Link>
  ));

  return (
    <Card>
      <Title xl2 bold color="#4B5563">
        Recap
      </Title>
      <Formik
        initialValues={{
          voucher: '',
        }}
        onSubmit={onSubmit}
      >
        {({ setFieldValue }) => (
          <Form>
            <Wrapper flex justifyContent="center" height="auto">
              <Space direction="vertical">
                <CustomCollapse collapsible="header" defaultActiveKey={['1']}>
                  <Panel header="Free" key="1">
                    <Row>
                      <Col span={24}>{recapQuestion}</Col>
                    </Row>
                  </Panel>
                </CustomCollapse>
                <CustomCollapse collapsible="disabled">
                  <Panel header="Recap Set of Questions" key="1">
                    <p>Question Set 1</p>
                  </Panel>
                </CustomCollapse>
                <CustomCollapse collapsible="disabled">
                  <Panel header="Recap Set of Questions" key="1">
                    <p>Question Set 1</p>
                  </Panel>
                </CustomCollapse>
                <Button
                  type="primary"
                  ghost
                  fullWidth
                  onClick={() => setIsVisible(true)}
                >
                  Use Voucher
                </Button>
              </Space>
            </Wrapper>
          </Form>
        )}
      </Formik>
      <ActionDialogModal
        visible={isVisible}
        title="Voucher"
        titleFontLevel={1}
        subtitle="Enter Code"
        subtitleFontLevel="normal"
        okText
        noText
        onOk
        onClose={handleCancel}
        loadingTip
        isLoading
        height={500}
      >
        <Formik
          initialValues={{
            voucher: '',
          }}
          onSubmit={onSubmitVoucher}
        >
          {() => (
            <Form>
              <Field name="voucher" component={FormInput} />
            </Form>
          )}
        </Formik>
        <Row gutter={20} style={{ marginTop: 20 }}>
          <Col span={12}>
            <Button type="primary" ghost onClick={handleCancel}>
              Cancel
            </Button>
          </Col>
          <Col span={12}>
            <Button type="primary">Use</Button>
          </Col>
        </Row>
      </ActionDialogModal>
    </Card>
  );
}

const Card = styled(StyledCard)`
  @media (min-width: 500px) {
    height: 100%;
    width: 100%;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    border-radius: 0.675rem;
    border: 1px solid #f3f4f6;
    background-color: #fff;
    padding: 20px;
  }
`;
