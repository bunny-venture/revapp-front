import React from 'react';
import styled from 'styled-components';

// Admin Auth Layout Components Fixed (OK)
import { AuthLayout } from '../../../components/Layouts/Auth';
import { SideNavigation } from '../../../components/Layouts/Auth/Admin/SideNavigation';
import { Header } from '../../../components/Layouts/Auth/Admin/Header';
import { Main } from '../../../components/Layouts/Auth/Admin/Main';

export function AdminAuthenticatedComponent() {
  return (
    <AuthLayout>
      <SideNavigation />

      <AdminLayoutWrapper>
        <Header />
        <Main />
      </AdminLayoutWrapper>
    </AuthLayout>
  );
}

const AdminLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
