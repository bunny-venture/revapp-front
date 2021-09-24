import React, { useState } from 'react';
import styled from 'styled-components';
import { Collapse, Space, Row, Col } from 'antd';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { StyledCard } from '../../components/Elements/Card';
import { Wrapper } from '../../components/Elements/Wrapper';
import { Text } from '../../components/Elements/Typography/Text';
import { Title } from '../../components/Elements/Typography/Title';
import Button from '../../components/Elements/Button/StyledButton';
import { FormInput } from '../../components/Elements/Input';
import ActionDialogModal from '../../components/Elements/Modals/ActionDialogModal';
import CustomCollapse from '../../components/Elements/Collapse';
import history from 'utils/history';
import { useRecapSlice } from './slice';

const { Panel } = Collapse;

export function RecapPage() {
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();
  const { actions } = useRecapSlice();

  const onSubmit = payload => {
    dispatch(actions.doVoucher(payload));
    console.log('here');
  };

  const onSubmitVoucher = () => {};

  const handleCancel = () => {
    setIsVisible(false);
  };

  return (
    <RecapPageLayout>
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
              {/*<Card style={{ margin: '2rem 0 4rem', width: 600 }}>*/}
              {/*  <CardHeader>*/}
              {/*    <Text bold lg style={{ marginBottom: '0' }} color="#fff">*/}
              {/*      Free*/}
              {/*    </Text>*/}
              {/*  </CardHeader>*/}
              {/*  <CardBody>*/}
              {/*    <Wrapper spaceY="2rem">*/}
              {/*      <Wrapper*/}
              {/*        flex*/}
              {/*        alignItems="center"*/}
              {/*        justifyContent="space-between"*/}
              {/*      >*/}
              {/*        /!*<Text bold style={{ marginBottom: '0' }}>*!/*/}
              {/*        /!*  Recap Set A:*!/*/}
              {/*        /!*</Text>*!/*/}
              {/*        /!*<Field*!/*/}
              {/*        /!*  name="questionSet1"*!/*/}
              {/*        /!*  component={CustomSelect}*!/*/}
              {/*        /!*  size="large"*!/*/}
              {/*        /!*  placeholder="Select Question Set"*!/*/}
              {/*        /!*  onChange={e => {*!/*/}
              {/*        /!*    setFieldValue('questionSet1', e);*!/*/}
              {/*        /!*  }}*!/*/}
              {/*        /!*  style={{ width: 200, borderRadius: 20 }}*!/*/}
              {/*        /!*>*!/*/}
              {/*        /!*  <Option value="1">Question Set 1</Option>*!/*/}
              {/*        /!*  <Option value="2">Question Set 2</Option>*!/*/}
              {/*        /!*</Field>*!/*/}
              {/*        <Space direction="vertical">*/}
              {/*          <Collapse*/}
              {/*            collapsible="header"*/}
              {/*            defaultActiveKey={['1']}*/}
              {/*            style={{ width: 400 }}*/}
              {/*          >*/}
              {/*            <Panel header="Recap Set" key="1">*/}
              {/*              <p>Question Set 1</p>*/}
              {/*            </Panel>*/}
              {/*          </Collapse>*/}
              {/*          <Collapse collapsible="disabled">*/}
              {/*            <Panel header="Recap Set" key="1">*/}
              {/*              <p>Question Set 1</p>*/}
              {/*            </Panel>*/}
              {/*          </Collapse>*/}
              {/*        </Space>*/}
              {/*        <StyledButton type="primary" onClick={onSubmit}>*/}
              {/*          Use Voucher*/}
              {/*        </StyledButton>*/}
              {/*      </Wrapper>*/}
              {/*      /!*<Wrapper*!/*/}
              {/*      /!*  flex*!/*/}
              {/*      /!*  alignItems="center"*!/*/}
              {/*      /!*  justifyContent="space-between"*!/*/}
              {/*      /!*>*!/*/}
              {/*      /!*  <Text bold style={{ marginBottom: '0' }}>*!/*/}
              {/*      /!*    Recap Set B:*!/*/}
              {/*      /!*  </Text>*!/*/}
              {/*      /!*  <Field*!/*/}
              {/*      /!*    name="questionSet2"*!/*/}
              {/*      /!*    component={CustomSelect}*!/*/}
              {/*      /!*    size="large"*!/*/}
              {/*      /!*    placeholder="Select Question Set"*!/*/}
              {/*      /!*    onChange={e => {*!/*/}
              {/*      /!*      setFieldValue('questionSet2', e);*!/*/}
              {/*      /!*    }}*!/*/}
              {/*      /!*    style={{ width: 200 }}*!/*/}
              {/*      /!*  >*!/*/}
              {/*      /!*    <Option value="1">Question Set 1</Option>*!/*/}
              {/*      /!*    <Option value="2">Question Set 2</Option>*!/*/}
              {/*      /!*    <Option value="3">Question Set 3</Option>*!/*/}
              {/*      /!*  </Field>*!/*/}
              {/*      /!*  <StyledButton type="primary">Use Voucher</StyledButton>*!/*/}
              {/*      /!*</Wrapper>*!/*/}
              {/*    </Wrapper>*/}
              {/*  </CardBody>*/}
              {/*</Card>*/}

              <Space direction="vertical">
                <CustomCollapse collapsible="header" defaultActiveKey={['1']}>
                  <Panel header="Free" key="1">
                    <Row>
                      <Col span={24}>
                        <Link to="/recap/question-set-1">Question Set 1</Link>
                      </Col>
                      <Col span={24}>
                        <Link to="/recap/question-set-1">Question Set 2</Link>
                      </Col>
                      <Col span={24}>
                        <Link to="/recap/question-set-1">Question Set 3</Link>
                      </Col>
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
    </RecapPageLayout>
  );
}

const Card = styled(StyledCard)`
  @media (min-width: 500px) {
    width: 30rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    border-radius: 0.675rem;
    border: 1px solid #f3f4f6;
    background-color: #fff;
  }
`;

const RecapPageLayout = styled.div`
  height: 100%;
`;

const CardHeader = styled.div`
  padding: 0.875rem 1rem;
  border-radius: 0.675rem 0.675rem 0 0;
  border-bottom: 1px solid #e2e8f0;
  background-color: #4338ca;
`;

const CardBody = styled.div`
  padding: 1rem;
`;

const PurpleButton = styled.button`
  cursor: pointer;
  height: 2.5rem;
  width: 8rem;
  background-color: #4338ca;
  border: 1px solid #f3f4f6;
  border-radius: 0.5rem;
  color: #fff;
  font-family: 'Quicksand';
  font-size: 0.875rem;
  font-weight: 600;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);

  &:hover {
    background-color: #4f46e5;
  }

  &:active {
    background-color: #4338ca;
  }
`;
