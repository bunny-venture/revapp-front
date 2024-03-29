import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Collapse, Space, Row, Col, Typography } from 'antd';
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
import {
  selectIsLoading,
  selectQuestionnaire,
  selectVoucherIsValid,
} from './slice/selectors';

const { Panel } = Collapse;
const { Text } = Typography;

export function RecapPage() {
  const dispatch = useDispatch();
  const { actions } = useRecapSlice();
  const allQuestions = useSelector(selectQuestionnaire);
  const isLoading = useSelector(selectIsLoading);
  const isValid = useSelector(selectVoucherIsValid);

  const [isVisible, setIsVisible] = useState(false);
  const [isCollapseDisable, setCollapseDisable] = useState(true);

  useEffect(() => {
    dispatch(actions.getQuestionnaire());
  }, [dispatch, actions]);

  useEffect(() => {
    if (isValid) {
      console.log('voucher valid');
      setIsVisible(false);
      setCollapseDisable(false);
    }
  }, [isValid]);

  const onSubmit = payload => {
    const { voucher } = payload;
    dispatch(actions.getVoucher(voucher));
  };

  const handleCancel = () => {
    setIsVisible(false);
  };

  const recapQuestion = allQuestions.map((questions, index) => (
    <li key={index}>
      <Link to={`/recap/${questions.id}`}>
        <Text underline>{questions.id}</Text>
      </Link>
    </li>
  ));

  return (
    <Card>
      <Title xl2 bold color="#4B5563">
        Recap
      </Title>

      <Wrapper flex justifyContent="center" height="auto">
        <Space direction="vertical">
          <CustomCollapse collapsible="header" defaultActiveKey={['1']}>
            <Panel header="Free" key="1">
              <Row>
                <Col span={24}>{recapQuestion}</Col>
              </Row>
            </Panel>
          </CustomCollapse>
          <CustomCollapse
            collapsible={isCollapseDisable ? 'disabled' : 'header'}
          >
            <Panel header="Recap Set of Questions" key="1">
              <p>Question Set 1</p>
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

      {/*// input voucher*/}
      <ActionDialogModal
        visible={isVisible}
        title="Voucher"
        titleFontLevel={1}
        subtitle="Enter Code"
        subtitleFontLevel="normal"
        onClose={handleCancel}
        isLoading
        height={500}
      >
        <Formik
          initialValues={{
            voucher: '',
          }}
          enableReinitialize
          onSubmit={onSubmit}
        >
          {({ handleSubmit }) => (
            <Form>
              <Field id="voucher" name="voucher" component={FormInput} />
              <Row gutter={20} style={{ marginTop: 20 }}>
                <Col span={12}>
                  <Button type="primary" ghost onClick={handleCancel}>
                    Cancel
                  </Button>
                </Col>
                <Col span={12}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    loading={isLoading}
                    // @ts-ignore
                    onClick={handleSubmit}
                  >
                    Use
                  </Button>
                </Col>
              </Row>
            </Form>
          )}
        </Formik>
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
