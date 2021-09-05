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
import { ROUTE } from 'utils/constant';

export function SideNavigation() {
  const location = useLocation();

  return (
    <StyledSideNavigation>
      <BrandName />
      <NavigationLinkWrapper>
        <NavigationLink
          style={
            location.pathname === ROUTE.ANNOUNCEMENT
              ? { backgroundColor: '#2a41cb', color: '#fff' }
              : {}
          }
          href={ROUTE.ANNOUNCEMENT}
        >
          <AnnouncementIcon />
          Announcement
        </NavigationLink>
        <NavigationLink
          style={
            location.pathname === ROUTE.PROFILE
              ? { backgroundColor: '#2a41cb', color: '#fff' }
              : {}
          }
          href={ROUTE.PROFILE}
        >
          <ProfileIcon />
          Profile
        </NavigationLink>
        <NavigationLink
          style={
            location.pathname === ROUTE.REVIEW
              ? { backgroundColor: '#2a41cb', color: '#fff' }
              : {}
          }
          href={ROUTE.REVIEW}
        >
          <ReviewIcon />
          Review
        </NavigationLink>
        <NavigationLink
          style={
            location.pathname === ROUTE.EXAM
              ? { backgroundColor: '#2a41cb', color: '#fff' }
              : {}
          }
          href={ROUTE.EXAM}
        >
          <ExamIcon />
          Exam
        </NavigationLink>
        <NavigationLink
          style={
            location.pathname === ROUTE.RECAP
              ? { backgroundColor: '#2a41cb', color: '#fff' }
              : {}
          }
          href={ROUTE.RECAP}
        >
          <RecapIcon />
          Recap
        </NavigationLink>
        <NavigationLink
          style={
            location.pathname === ROUTE.HISTORY
              ? { backgroundColor: '#2a41cb', color: '#fff' }
              : {}
          }
          href={ROUTE.HISTORY}
        >
          <HistoryIcon />
          History
        </NavigationLink>
        <NavigationLink
          style={
            location.pathname === ROUTE.STATISTICS
              ? { backgroundColor: '#2a41cb', color: '#fff' }
              : {}
          }
          href={ROUTE.STATISTICS}
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
