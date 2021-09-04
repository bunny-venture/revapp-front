import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

// User Navigation Layout Fixed (OK)
import { BrandName } from '../../../../../components/Elements/Logo';
import { AnnouncementIcon } from '../../../../Elements/Icons';
import { ProfileIcon } from '../../../../Elements/Icons';
import { ReviewIcon } from '../../../../Elements/Icons';
import { ExamIcon } from '../../../../Elements/Icons';
import { RecapIcon } from '../../../../Elements/Icons';
import { HistoryIcon } from '../../../../Elements/Icons';
import { StatisticsIcon } from '../../../../Elements/Icons';

export function SideNavigation() {
  const location = useLocation();

  return (
    <StyledSideNavigation>
      <BrandName />
      <NavigationLinkWrapper>
        <NavigationLink
          style={
            location.pathname === '/announcement'
              ? { backgroundColor: '#2a41cb', color: '#fff' }
              : {}
          }
          href="/announcement"
        >
          <AnnouncementIcon />
          Announcement
        </NavigationLink>
        <NavigationLink
          style={
            location.pathname === '/profile'
              ? { backgroundColor: '#2a41cb', color: '#fff' }
              : {}
          }
          href="/profile"
        >
          <ProfileIcon />
          Profile
        </NavigationLink>
        <NavigationLink
          style={
            location.pathname === '/review'
              ? { backgroundColor: '#2a41cb', color: '#fff' }
              : {}
          }
          href="/review"
        >
          <ReviewIcon />
          Review
        </NavigationLink>
        <NavigationLink
          style={
            location.pathname === '/exam'
              ? { backgroundColor: '#2a41cb', color: '#fff' }
              : {}
          }
          href="/exam"
        >
          <ExamIcon />
          Exam
        </NavigationLink>
        <NavigationLink
          style={
            location.pathname === '/recap'
              ? { backgroundColor: '#2a41cb', color: '#fff' }
              : {}
          }
          href="/recap"
        >
          <RecapIcon />
          Recap
        </NavigationLink>
        <NavigationLink
          style={
            location.pathname === '/history'
              ? { backgroundColor: '#2a41cb', color: '#fff' }
              : {}
          }
          href="/history"
        >
          <HistoryIcon />
          History
        </NavigationLink>
        <NavigationLink
          style={
            location.pathname === '/statistics'
              ? { backgroundColor: '#2a41cb', color: '#fff' }
              : {}
          }
          href="/statistics"
        >
          <StatisticsIcon />
          Statistics
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
