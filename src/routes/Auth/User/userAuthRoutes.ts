import { AnnouncementPage } from '../../../app/pages/AnnouncementPage/Loadable';
import { ProfilePage } from '../../../app/pages/ProfilePage/Loadable';
import { RecapPage } from '../../../app/pages/RecapPage/Loadable';
import { HistoryPage } from '../../../app/pages/HistoryPage/Loadable';
import { StatisticsPage } from '../../../app/pages/StatisticsPage/Loadable';
import { QuestionnairePage } from '../../../app/pages/QuestionairePage/Loadable';
import { ROUTE } from '../../../utils/constant';

export const userAuthRoutes = [
  {
    path: ROUTE.ANNOUNCEMENT,
    name: 'Announcement',
    component: AnnouncementPage,
    exact: true,
  },
  {
    path: ROUTE.PROFILE,
    name: 'Profile',
    component: ProfilePage,
    exact: true,
  },
  {
    path: ROUTE.REVIEW,
    name: 'Review',
    component: QuestionnairePage,
    exact: true,
  },
  {
    path: ROUTE.EXAM,
    name: 'Exam',
    component: QuestionnairePage,
    exact: true,
  },
  {
    path: ROUTE.RECAP,
    name: 'Recap',
    component: RecapPage,
    exact: true,
  },
  {
    path: ROUTE.HISTORY,
    name: 'History',
    component: HistoryPage,
    exact: true,
  },
  {
    path: ROUTE.STATISTICS,
    name: 'Statistics',
    component: StatisticsPage,
    exact: true,
  },
];
