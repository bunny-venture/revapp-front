import React from 'react';
import styled from 'styled-components';

// User Auth Layout Components Fixed (OK)
import { AuthLayout } from '../../../components/Layouts/Auth';
import { SideNavigation } from '../../../components/Layouts/Auth/User/SideNavigation';
import { Header } from '../../../components/Layouts/Auth/User/Header';
import { Main } from '../../../components/Layouts/Auth/User/Main';

export function UserAuthenticatedComponent() {
  return (
    <AuthLayout>
      <SideNavigation />

      <UserLayoutWrapper>
        <Header />
        <Main />
      </UserLayoutWrapper>
    </AuthLayout>
  );
}

const UserLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
