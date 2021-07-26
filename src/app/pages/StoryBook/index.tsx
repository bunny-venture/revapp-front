import React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';

// import { Button } from '../../components/Elements/Button';

export function StoryBook() {
  return (
    <Layout>
      <Helmet>
        <title>Storybook for Testing</title>
      </Helmet>
      <Style></Style>
    </Layout>
  );
}

const Layout = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
`;

const Style = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & > * + * {
    margin-left: 0.125rem;
  }
`;
