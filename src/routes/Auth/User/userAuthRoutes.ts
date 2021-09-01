import { AnnouncementPage } from '../../../app/pages/Auth/User/Pages/AnnouncementPage/Loadable';
import { ProfilePage } from '../../../app/pages/Auth/User/Pages/ProfilePage/Loadable';
import { ReviewPage } from '../../../app/pages/Auth/User/Pages/ReviewPage/Loadable';
import { ExamPage } from '../../../app/pages/Auth/User/Pages/ExamPage/Loadable';
import { RecapPage } from '../../../app/pages/Auth/User/Pages/RecapPage/Loadable';
import { HistoryPage } from '../../../app/pages/Auth/User/Pages/HistoryPage/Loadable';
import { StatisticsPage } from '../../../app/pages/Auth/User/Pages/StatisticsPage/Loadable';

export const userAuthRoutes = [
  {
    path: '/user/announcement',
    name: 'Announcement',
    component: AnnouncementPage,
    exact: true,
  },
  {
    path: '/user/profile',
    name: 'Profile',
    component: ProfilePage,
    exact: true,
  },
  {
    path: '/user/review',
    name: 'Review',
    component: ReviewPage,
    exact: true,
  },
  {
    path: '/user/exam',
    name: 'Exam',
    component: ExamPage,
    exact: true,
  },
  {
    path: '/user/recap',
    name: 'Recap',
    component: RecapPage,
    exact: true,
  },
  {
    path: '/user/history',
    name: 'History',
    component: HistoryPage,
    exact: true,
  },
  {
    path: '/user/statistics',
    name: 'Statistics',
    component: StatisticsPage,
    exact: true,
  },
];
