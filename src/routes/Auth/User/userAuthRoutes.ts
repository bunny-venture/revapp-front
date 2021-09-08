import { AnnouncementPage } from '../../../app/pages/AnnouncementPage/Loadable';
import { ProfilePage } from '../../../app/pages/ProfilePage/Loadable';
import { ReviewPage } from '../../../app/pages/ReviewPage/Loadable';
import { ReviewQuestionPage } from '../../../app/pages/ReviewQuestionPage/Loadable';
import { ExamPage } from '../../../app/pages/ExamPage/Loadable';
import { ExamQuestionPage } from '../../../app/pages/ExamQuestionPage/Loadable';
import { RecapPage } from '../../../app/pages/RecapPage/Loadable';
import { HistoryPage } from '../../../app/pages/HistoryPage/Loadable';
import { StatisticsPage } from '../../../app/pages/StatisticsPage/Loadable';
import { RecapQuestionPage } from '../../../app/pages/RecapQuestionPage/Loadable';

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
    path: '/review/questions',
    name: 'Review Question',
    component: ReviewQuestionPage,
    exact: true,
  },
  {
    path: '/exam',
    name: 'Exam',
    component: ExamPage,
    exact: true,
  },
  {
    path: '/exam/questions',
    name: 'Exam Question',
    component: ExamQuestionPage,
    exact: true,
  },
  {
    path: '/recap',
    name: 'Recap',
    component: RecapPage,
    exact: true,
  },
  {
    path: '/recap/question-set-1',
    name: 'Recap Questions',
    component: RecapQuestionPage,
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
