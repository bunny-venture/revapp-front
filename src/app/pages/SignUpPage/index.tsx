import React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import { Button } from 'antd';
import { Formik, Form, Field } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { useSignupSlice } from './slice';
import { selectLoading } from './slice/selectors';
// Guest Layout Components
import { GuestLayout } from '../../components/Layouts/Guest';
import { GuestContent } from '../../components/Layouts/Guest/Content';
import { GuestFooter } from '../../components/Layouts/Guest/Footer';

// App Components
import { Text } from '../../components/Elements/Typography/Text';
import { Title } from '../../components/Elements/Typography/Title';
import { StyledCard } from '../../components/Elements/Card';
import { Wrapper } from '../../components/Elements/Wrapper';
import { FormInput } from '../../components/Elements/Input';
import { InputGroup } from '../../components/Elements/InputGroup';
import { ReviewImage } from '../../components/Elements/Images';
import { SecureLoginImage } from '../../components/Elements/Images';
import signUpValidationSchema from './validationSchema';

export function SignUpPage() {
  const dispatch = useDispatch();
  const { actions } = useSignupSlice();
  const isLoading = useSelector(selectLoading);

  const onSubmit = payload => {
    dispatch(actions.doSignUp(payload));
  };

  return (
    <GuestLayout>
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <GuestContent>
        <ResponsiveWrapper
          flex
          flexDirection="column"
          justifyContent="center"
          height="100%"
        >
          <Formik
            initialValues={{
              email: '',
              name: '',
              password: '',
            }}
            onSubmit={onSubmit}
            validationSchema={signUpValidationSchema}
          >
            {() => (
              <Form>
                <Card>
                  <Wrapper spaceY="3rem">
                    <Wrapper
                      flex
                      flexDirection="column"
                      alignItems="center"
                      spaceY="0.125rem"
                    >
                      <Title xl2 extrabold noMarginBottom color="#2A41CB">
                        Sign Up with RevApp
                      </Title>
                      <Text xs medium noMarginBottom color="#9CA3AF">
                        Sign Up and start your learning with RevApp
                      </Text>
                    </Wrapper>
                    <Wrapper spaceY="0.7rem">
                      <InputGroup>
                        <Text sm bold noMarginBottom color="#6B7280">
                          Email
                        </Text>
                        <Field
                          name="email"
                          size="large"
                          component={FormInput}
                        />
                      </InputGroup>
                      <InputGroup>
                        <Text sm bold noMarginBottom color="#6B7280">
                          Username
                        </Text>
                        <Field name="name" size="large" component={FormInput} />
                      </InputGroup>

                      <InputGroup>
                        <Text sm bold noMarginBottom color="#6B7280">
                          Password
                        </Text>
                        <Field
                          name="password"
                          size="large"
                          type="password"
                          component={FormInput}
                        />
                      </InputGroup>

                      {/* <InputGroup>
                        <Text sm bold noMarginBottom color="#6B7280">
                          Confirm Password
                        </Text>
                        <Field
                          name="confirmPassword"
                          size="large"
                          type="password"
                          component={FormInput}
                        />
                      </InputGroup> */}
                    </Wrapper>
                    <StyledButton loading={isLoading} htmlType="submit">
                      Sign Up
                    </StyledButton>
                  </Wrapper>
                </Card>
              </Form>
            )}
          </Formik>
          <AccountLoginInstruction>
            <Text xs bold noMarginBottom color="#6B7280">
              Already registered yet?
            </Text>
            <CreateAccountLink href="/login">
              Sign in your Account
            </CreateAccountLink>
          </AccountLoginInstruction>
        </ResponsiveWrapper>
      </GuestContent>
      <GuestFooter>
        <Text xs medium noMarginBottom color="#9CA3AF">
          &copy;Copyright 2021. RevApp All rights reserved.
        </Text>
      </GuestFooter>
      <ReviewImage />
      <SecureLoginImage />
    </GuestLayout>
  );
}

const Card = styled(StyledCard)`
  @media (min-width: 500px) {
    width: 23rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    padding: 2.5rem 1.2rem 0.875rem;
    border-radius: 0.675rem;
    border: 1px solid #f3f4f6;
    background-color: #fff;
  }
`;

const ResponsiveWrapper = styled(Wrapper)`
  @media (min-width: 500px) {
    align-items: center;
  }
`;

const StyledButton = styled(Button)`
  cursor: pointer;
  height: 3rem;
  width: 100%;
  background-color: #4338ca;
  border: 1px solid #f3f4f6;
  border-radius: 0.5rem;
  color: #fff;
  font-family: 'Quicksand';
  font-size: 0.875rem;
  font-weight: 600;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
             0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;

const AccountLoginInstruction = styled.div`
  display: flex;
  margin-top: 1.2rem;
  padding: 0.5rem 0.8rem;
  border-top: 1px solid #d1d5db;

  & > * + * {
    margin-left: 0.5rem;
  }
`;

const CreateAccountLink = styled.a`
  font-size: 0.75rem;
  font-weight: 800;
  color: #4338ca;
  cursor: pointer;
`;
