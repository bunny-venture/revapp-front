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
import { VerifyEmailAddressImage } from '../../components/Elements/Images';
import { ReviewImage } from '../../components/Elements/Images';
import { SecureLoginImage } from '../../components/Elements/Images';

export function VerifyEmailAddressPage() {
  return (
    <GuestLayout>
      <Helmet>
        <title>Verify Email Address</title>
      </Helmet>
      <GuestContent>
        <ResponsiveWrapper
          flex
          flexDirection="column"
          justifyContent="center"
          height="100%"
        >
          <Card>
            <Wrapper spaceY="2rem">
              <Wrapper
                flex
                flexDirection="column"
                alignItems="center"
                spaceY="0.125rem"
              >
                <Title xl2 extrabold color="#2A41CB">
                  Verify your Email
                </Title>
                <Text xs medium color="#9CA3AF" style={{ textAlign: 'center' }}>
                  You will need to verify your email to complete your
                  registration.
                </Text>
              </Wrapper>
              <Wrapper spaceY="0.7rem">
                <Wrapper flex justifyContent="center">
                  <VerifyEmailAddressImage />
                </Wrapper>
                <Wrapper style={{ marginTop: '2rem' }}>
                  <Text xs medium color=" #9CA3AF">
                    An email has been sent to {'exampleEmail@gmail.com'} with a
                    link to verify your account. If you have not received the
                    email after a few minutes, please check your spam folder.
                  </Text>
                </Wrapper>
              </Wrapper>

              <Wrapper flex justifyContent="flex-end">
                <Button>Resend Email</Button>
              </Wrapper>
            </Wrapper>
          </Card>
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
  @media (min-width: 570px) {
    width: 34rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    padding: 2.5rem 1.9rem 0.875rem;
    border-radius: 0.675rem;
    border: 1px solid #f3f4f6;
    background-color: #fff;
  }
`;

const ResponsiveWrapper = styled(Wrapper)`
  @media (min-width: 570px) {
    align-items: center;
  }
`;

const Button = styled.button`
  cursor: pointer;
  height: 2.8rem;
  width: 9rem;
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
