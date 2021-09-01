import React from 'react';
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import { ROUTE } from 'utils/constant';

import { Wrapper } from '../../components/Elements/Wrapper';
import { Text } from '../../components/Elements/Typography/Text';
import { Title } from '../../components/Elements/Typography/Title';

export function HomePage() {
  let history = useHistory();
  return (
    <Layout>
      <Helmet>
        <title>Rev App</title>
      </Helmet>
      <Header>
        <Container>
          <Wrapper flex justifyContent="space-between" alignItems="center">
            <Title xl extrabold color="#2A41CB">
              RevApp
            </Title>
            <Wrapper flex alignItems="center" spaceX="2rem">
              <LinkButton href={ROUTE.SIGNUP}>Sign Up</LinkButton>
              <LinkButton>FAQ</LinkButton>
              <LinkButton>Inquiry</LinkButton>
              <LoginButton onClick={() => history.push(ROUTE.LOGIN)}>
                Login
              </LoginButton>
            </Wrapper>
          </Wrapper>
        </Container>
      </Header>

      <HeroSection>
        <Container>
          <Wrapper flex height="100%">
            <Wrapper spaceY="1.875rem" style={{ margin: '11rem 0 0' }}>
              <Wrapper spaceY="0.875rem">
                <Title xl6 extrabold color="#121C57" style={{ width: '45rem' }}>
                  Find your dream job and review
                </Title>
                <Text base color="#374151" style={{ width: '40rem' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
              </Wrapper>
              <GetStartedButton>Get Started</GetStartedButton>
            </Wrapper>
            {/* <Wrapper>Illustration</Wrapper> */}
          </Wrapper>
        </Container>
      </HeroSection>

      <PricingSection>
        <Container>
          <Wrapper
            flex
            alignItems="center"
            flexDirection="column"
            spaceY="3rem"
          >
            <Title xl4 extrabold color="#121C57">
              Pricing
            </Title>

            <Wrapper flex spaceX="4rem">
              <Card>
                <Wrapper
                  flex
                  flexDirection="column"
                  alignItems="center"
                  spaceY="1rem"
                >
                  <Text bold>Free</Text>
                  <Wrapper flex alignItems="center" spaceX="0.3rem">
                    <Text bold lg>
                      &#8369;
                    </Text>
                    <Text bold xl5>
                      0
                    </Text>
                  </Wrapper>

                  <FreePlanButton>Get Started</FreePlanButton>
                </Wrapper>
              </Card>
              <SubscribeCard>
                <Wrapper
                  flex
                  flexDirection="column"
                  alignItems="center"
                  spaceY="1rem"
                >
                  <Text bold>Subscribe</Text>
                  <Wrapper flex alignItems="center" spaceX="0.3rem">
                    <Text bold lg>
                      &#8369;
                    </Text>
                    <Text bold xl5>
                      500
                    </Text>
                  </Wrapper>
                  <SubscriptionPlanButton>Buy</SubscriptionPlanButton>
                </Wrapper>
              </SubscribeCard>
            </Wrapper>
          </Wrapper>
        </Container>
      </PricingSection>

      <Footer>
        <Container>
          <Wrapper flex justifyContent="center">
            <Text xs bold color="#D1D5DB">
              &copy;Copyright 2021. RevApp All rights reserved.
            </Text>
          </Wrapper>
        </Container>
      </Footer>
    </Layout>
  );
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Container = styled.div`
  width: 87%;
  height: 100%;
  margin: 0 auto;
`;

const Header = styled.header`
  padding: 0.75rem 0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border-radius: 0.125rem;
  z-index: 1;
`;

const LoginButton = styled.button`
  cursor: pointer;
  padding: 0.625rem 2.25rem;
  border: 1px solid #f3f4f6;
  border-radius: 0.5rem;
  background-color: #2a41cb;
  color: #fff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5rem;
`;

const LinkButton = styled.a`
  cursor: pointer;
  color: #2a41cb;
  font-weight: 700;
  font-size: 1rem;
`;

const HeroSection = styled.section`
  height: 90.5vh;
  background-color: #f9fafb;
  padding: 1rem 0;
`;

const PricingSection = styled.section`
  height: 100vh;
  padding: 1rem 0;
`;

const Footer = styled.footer`
  background-color: #140c5c;
  padding: 0.75rem 0;
`;

const GetStartedButton = styled.button`
  cursor: pointer;
  padding: 1rem 2.25rem;
  border: 1px solid #f3f4f6;
  border-radius: 0.5rem;
  background-color: #2a41cb;
  color: #fff;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.5rem;
`;

const Card = styled.div`
  width: 21rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 1rem 2.5rem;
  border-radius: 0.675rem;
  border: 2px solid #f3f4f6;
  background-color: #fff;
`;

const FreePlanButton = styled.button`
  cursor: pointer;
  width: 100%;
  padding: 0.625rem 2.25rem;
  border: 2px solid #2a41cb;
  border-radius: 0.5rem;
  background-color: #fff;
  color: #2a41cb;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.5rem;
`;

const SubscriptionPlanButton = styled.button`
  cursor: pointer;
  width: 100%;
  padding: 0.625rem 2.25rem;
  border: 1px solid #f3f4f6;
  border-radius: 0.5rem;
  background-color: #2a41cb;
  color: #fff;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.5rem;
`;

const SubscribeCard = styled(Card)`
  border: 2px solid #2a41cb;
`;
