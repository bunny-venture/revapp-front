import { AnnouncementPage } from '../../../app/pages/AnnouncementPage/Loadable';
import { ProfilePage } from '../../../app/pages/ProfilePage/Loadable';
import { RecapPage } from '../../../app/pages/RecapPage/Loadable';
import { HistoryPage } from '../../../app/pages/HistoryPage/Loadable';
import { StatisticsPage } from '../../../app/pages/StatisticsPage/Loadable';
import { QuestionnairePage } from '../../../app/pages/QuestionairePage/Loadable';
import { ROUTE } from '../../../utils/constant';
import { ReviewQuestionPage } from '../../../app/pages/ReviewQuestionPage/Loadable';
import { ExamQuestionPage } from '../../../app/pages/ExamQuestionPage/Loadable';
import { RecapQuestionPage } from '../../../app/pages/RecapQuestionPage/Loadable';

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
    path: '/review/questions',
    name: 'Review Question',
    component: ReviewQuestionPage,
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
    component: QuestionnairePage,
    exact: true,
  },
  {
    path: '/exam/questions',
    name: 'Exam Question',
    component: ExamQuestionPage,
    exact: true,
  },
  {
    path: ROUTE.RECAP,
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
