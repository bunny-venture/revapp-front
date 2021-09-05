import { AnnouncementPage } from '../../../app/pages/AnnouncementPage/Loadable';
import { ProfilePage } from '../../../app/pages/ProfilePage/Loadable';
import { ReviewPage } from '../../../app/pages/ReviewPage/Loadable';
import { ExamPage } from '../../../app/pages/ExamPage/Loadable';
import { RecapPage } from '../../../app/pages/RecapPage/Loadable';
import { HistoryPage } from '../../../app/pages/HistoryPage/Loadable';
import { StatisticsPage } from '../../../app/pages/StatisticsPage/Loadable';

export const userAuthRoutes = [
  {
    path: '/announcement',
    name: 'Announcement',
    component: AnnouncementPage,
    exact: true,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: ProfilePage,
    exact: true,
  },
  {
    path: '/review',
    name: 'Review',
    component: ReviewPage,
    exact: true,
  },
  {
    path: '/exam',
    name: 'Exam',
    component: ExamPage,
    exact: true,
  },
  {
    path: '/recap',
    name: 'Recap',
    component: RecapPage,
    exact: true,
  },
  {
    path: '/history',
    name: 'History',
    component: HistoryPage,
    exact: true,
  },
  {
    path: '/statistics',
    name: 'Statistics',
    component: StatisticsPage,
    exact: true,
  },
];
