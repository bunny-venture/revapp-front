import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

// User Navigation Layout Fixed (OK)
import { BrandName } from '../../../../../components/Elements/Logo';
import { ProfileIcon } from '../../../../Elements/Icons';
import { AnnouncementIcon } from '../../../../Elements/Icons';
import { ExamIcon } from '../../../../Elements/Icons';
import { HistoryIcon } from '../../../../Elements/Icons';
import { StatisticsIcon } from '../../../../Elements/Icons';
import { UsersIcon } from '../../../../Elements/Icons';
import { InquiryIcon } from '../../../../Elements/Icons';
import { SubscriptionIcon } from '../../../../Elements/Icons';

export function SideNavigation() {
  const location = useLocation();

  return (
    <StyledSideNavigation>
      <BrandName />
      <NavigationLinkWrapper>
        <NavigationLink
          style={
            location.pathname === '/admin/profile'
              ? { backgroundColor: '#2a41cb', color: '#fff' }
              : {}
          }
          href="/admin/profile"
        >
          <ProfileIcon />
          Profile
        </NavigationLink>
        <NavigationLink
          style={
            location.pathname === '/admin/users'
              ? { backgroundColor: '#2a41cb', color: '#fff' }
              : {}
          }
          href="/admin/users"
        >
          <UsersIcon />
          Users
        </NavigationLink>

        <NavigationLink
          style={
            location.pathname === '/admin/questions'
              ? { backgroundColor: '#2a41cb', color: '#fff' }
              : {}
          }
          href="/admin/questions"
        >
          <ExamIcon />
          Questions
        </NavigationLink>
        <NavigationLink
          style={
            location.pathname === '/admin/news'
              ? { backgroundColor: '#2a41cb', color: '#fff' }
              : {}
          }
          href="/admin/news"
        >
          <AnnouncementIcon />
          CMS/News
        </NavigationLink>
        <NavigationLink
          style={
            location.pathname === '/admin/subscription'
              ? { backgroundColor: '#2a41cb', color: '#fff' }
              : {}
          }
          href="/admin/subscription"
        >
          <SubscriptionIcon />
          Subscription
        </NavigationLink>
        <NavigationLink
          style={
            location.pathname === '/admin/inquiry'
              ? { backgroundColor: '#2a41cb', color: '#fff' }
              : {}
          }
          href="/admin/inquiry"
        >
          <InquiryIcon />
          Inquiry
        </NavigationLink>
        <NavigationLink
          style={
            location.pathname === '/admin/statistics'
              ? { backgroundColor: '#2a41cb', color: '#fff' }
              : {}
          }
          href="/admin/statistics"
        >
          <StatisticsIcon />
          Statistics
        </NavigationLink>
        <NavigationLink
          style={
            location.pathname === '/admin/history'
              ? { backgroundColor: '#2a41cb', color: '#fff' }
              : {}
          }
          href="/admin/history"
        >
          <HistoryIcon />
          History
        </NavigationLink>
      </NavigationLinkWrapper>
    </StyledSideNavigation>
  );
}

const StyledSideNavigation = styled.nav`
  padding: 1rem 0.7rem;
  width: 18rem;
  border: 1px solid #e5e7eb;

  & > * + * {
    margin-top: 3.2rem;
  }
`;

const NavigationLink = styled.a`
  display: flex;
  font-size: 1rem;
  font-weight: 700;
  color: #2a41cb;
  padding: 0.6rem 0.325rem;
  cursor: pointer;
  border-radius: 0.375rem;
  text-decoration: none;

  &:hover {
    background-color: #e0e7ff;
  }
`;

const NavigationLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;

  & > * + * {
    margin-top: 0.3rem;
  }
`;
