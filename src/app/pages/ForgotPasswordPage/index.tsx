import React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';

// Guest Layout Components
import { GuestLayout } from '../../components/Layouts/Guest';
import { GuestContent } from '../../components/Layouts/Guest/Content';
import { GuestFooter } from '../../components/Layouts/Guest/Footer';

// App Components
import { Text } from '../../components/Elements/Typography/Text';
import { Title } from '../../components/Elements/Typography/Title';
import { StyledCard } from '../../components/Elements/Card';
import { Wrapper } from '../../components/Elements/Wrapper';
import { StyledInput } from '../../components/Elements/Input';
import { InputGroup } from '../../components/Elements/InputGroup';
import { ReviewImage } from '../../components/Elements/Images';
import { SecureLoginImage } from '../../components/Elements/Images';

export function ForgotPasswordPage() {
  return (
    <GuestLayout>
      <Helmet>
        <title>Forgot Password</title>
      </Helmet>
      <GuestContent>
        <ResponsiveWrapper
          flex
          flexDirection="column"
          justifyContent="center"
          height="100%"
        >
          <Card>
            <Wrapper spaceY="3rem">
              <Wrapper
                flex
                flexDirection="column"
                alignItems="center"
                spaceY="0.125rem"
              >
                <Title xl2 extrabold color="#2A41CB">
                  Forgot Password
                </Title>
                <Text xs medium color="#9CA3AF">
                  Please enter details below to recover your password.
                </Text>
              </Wrapper>
              <Wrapper spaceY="0.7rem">
                <InputGroup>
                  <Text sm bold color="#6B7280">
                    Username
                  </Text>
                  <StyledInput />
                </InputGroup>

                <InputGroup>
                  <Text sm bold color="#6B7280">
                    Email
                  </Text>
                  <StyledInput />
                </InputGroup>
              </Wrapper>

              <Button>Submit</Button>
            </Wrapper>
          </Card>
          <CreateAccountInstruction>
            <Text xs bold color="#6B7280">
              Already registered yet?
            </Text>
            <CreateAccountLink href="/login">
              Sign In your Account
            </CreateAccountLink>
          </CreateAccountInstruction>
        </ResponsiveWrapper>
      </GuestContent>
      <GuestFooter>
        <Text xs medium color="#9CA3AF">
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

const Button = styled.button`
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

const CreateAccountInstruction = styled.div`
  display: flex;
  margin-top: 1.2rem;
  padding: 0.5rem 2.5rem;
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
