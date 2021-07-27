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
import { Input } from '../../components/Elements/Input';
import { InputGroup } from '../../components/Elements/InputGroup';
import { ReviewImage } from '../../components/Elements/Images';
import { SecureLoginImage } from '../../components/Elements/Images';

export function LoginPage() {
  return (
    <GuestLayout>
      <Helmet>
        <title>Log In</title>
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
                  Sign in to RevApp
                </Title>
                <Text xs medium color="#9CA3AF">
                  Please enter details below to continue.
                </Text>
              </Wrapper>
              <Wrapper spaceY="0.7rem">
                <InputGroup>
                  <Text sm bold color="#6B7280">
                    Username
                  </Text>
                  <Input />
                </InputGroup>

                <InputGroup>
                  <Text sm bold color="#6B7280">
                    Password
                  </Text>
                  <Input type="password" />
                </InputGroup>
                <Wrapper>
                  <ForgotPasswordLink href="/forgot-password">
                    Forgot Password?
                  </ForgotPasswordLink>
                </Wrapper>
              </Wrapper>

              <Button>Sign In</Button>
            </Wrapper>
          </Card>
          <CreateAccountInstruction>
            <Text xs bold color="#6B7280">
              Not registered yet?
            </Text>
            <CreateAccountLink href="/signup">
              Create an Account
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

const ForgotPasswordLink = styled.a`
  font-size: 0.8rem;
  font-weight: 800;
  color: #4338ca;
  cursor: pointer;
`;

// const GuestLayout = styled.div`
//   display: flex;
//   flex-direction: column;
//   height: 100vh;
//   background-color: #f7fbff;
// `;

// const GuestHeader = styled.header`
//   padding: 1rem;
// `;

// const GuestContent = styled.main`
//   height: 100%;
// `;

// const GuestFooter = styled.footer`
//   padding: 1rem;
// `;

// const Card = styled.div`
//   width: 21rem;
//   padding: 2rem 1.7rem 0.7rem;
//   background-color: #fff;
//   box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
//     0 2px 4px -1px rgba(0, 0, 0, 0.06);
//   border-radius: 0.5rem;
//   border: 1px solid #f3f4f6;
// `;

// const Container = styled.div`
//   width: 98%;
//   height: 100%;
// `;

// const Input = styled.input`
//   outline: none;
//   border: 1px solid #9ca3af;
//   border-radius: 0.375rem;
//   padding: 0.4rem 0.5rem;
//   font-family: 'Quicksand';
//   font-weight: 600;
//   font-size: 1rem;
//   width: 100%;

//   &:focus {
//     border: 2px solid #4338ca;
//     background-color: #fff;
//   }
// `;

// const InputGroup = styled.div`
//   & > * + * {
//     margin-top: 0.2rem;
//   }
// `;

// const Button = styled.button`
//   cursor: pointer;
//   height: 3rem;
//   margin-top: 2rem;
//   width: 100%;
//   border: 1px solid #f3f4f6;
//   background-color: #4338ca;
//   color: #fff;
//   border-radius: 0.5rem;
//   font-family: 'Quicksand';
//   font-weight: 500;
//   font-size: 1rem;
//   box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
//     0 2px 4px -1px rgba(0, 0, 0, 0.06);

//   &:active {
//     background-color: #3730a3;
//   }

//   // &:hover {
//   //   background-color: #3730a3;
//   // }
// `;

// const Link = styled.a`
//   font-size: 0.8rem;
//   font-weight: 700;
//   color: #4338ca;
//   cursor: pointer;
// `;

/* <GuestLayout>
      
      <GuestHeader>
        <Container>This is Header</Container>
      </GuestHeader>
      <GuestContent>
        <Container>
          <Wrapper
            flex
            justifyContent="center"
            alignItems="center"
            height="100%"
          >
            <Card>
              <Wrapper spaceY="1.5rem">
                <Wrapper
                  flex
                  flexDirection="column"
                  alignItems="center"
                  spaceY="0.3rem"
                >
                  <Title xl2 extrabold color="#2A41CB">
                    Sign in to RevApp
                  </Title>
                  <Text xs medium>
                    Please enter details below to continue.
                  </Text>
                </Wrapper>

                <Wrapper spaceY="0.875rem">
                  <InputGroup>
                    <Text medium>Username</Text>
                    <Input />
                  </InputGroup>

                  <InputGroup>
                    <Text medium>Password</Text>
                    <Input type="password" />
                  </InputGroup>
                  <Wrapper flex justifyContent="flex-end">
                    <Link>Forgot Password?</Link>
                  </Wrapper>
                </Wrapper>

                <Button>Sign In</Button>
              </Wrapper>
            </Card>
          </Wrapper>
        </Container>
      </GuestContent>
      <GuestFooter>
        <Container>This is Footer</Container>
      </GuestFooter>
    </GuestLayout> */
