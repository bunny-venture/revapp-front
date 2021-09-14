import { AnnouncementPage } from '../../../app/pages/AnnouncementPage/Loadable';
import { ProfilePage } from '../../../app/pages/ProfilePage/Loadable';
<<<<<<< HEAD
import { RecapPage } from '../../../app/pages/RecapPage/Loadable';
import { HistoryPage } from '../../../app/pages/HistoryPage/Loadable';
import { StatisticsPage } from '../../../app/pages/StatisticsPage/Loadable';
import { QuestionnairePage } from '../../../app/pages/QuestionairePage/Loadable';
import { ROUTE } from '../../../utils/constant';
=======
import { ReviewPage } from '../../../app/pages/ReviewPage/Loadable';
import { ReviewQuestionPage } from '../../../app/pages/ReviewQuestionPage/Loadable';
import { ExamPage } from '../../../app/pages/ExamPage/Loadable';
import { ExamQuestionPage } from '../../../app/pages/ExamQuestionPage/Loadable';
import { RecapPage } from '../../../app/pages/RecapPage/Loadable';
import { HistoryPage } from '../../../app/pages/HistoryPage/Loadable';
import { StatisticsPage } from '../../../app/pages/StatisticsPage/Loadable';
import { RecapQuestionPage } from '../../../app/pages/RecapQuestionPage/Loadable';
>>>>>>> a8ab0e9a8c79fcd9e1aab8530bd8d3f002570c78

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
<<<<<<< HEAD
    path: ROUTE.EXAM,
=======
    path: '/review/questions',
    name: 'Review Question',
    component: ReviewQuestionPage,
    exact: true,
  },
  {
    path: '/exam',
>>>>>>> a8ab0e9a8c79fcd9e1aab8530bd8d3f002570c78
    name: 'Exam',
    component: QuestionnairePage,
    exact: true,
  },
  {
<<<<<<< HEAD
    path: ROUTE.RECAP,
=======
    path: '/exam/questions',
    name: 'Exam Question',
    component: ExamQuestionPage,
    exact: true,
  },
  {
    path: '/recap',
>>>>>>> a8ab0e9a8c79fcd9e1aab8530bd8d3f002570c78
    name: 'Recap',
    component: RecapPage,
    exact: true,
  },
  {
<<<<<<< HEAD
    path: ROUTE.HISTORY,
=======
    path: '/recap/question-set-1',
    name: 'Recap Questions',
    component: RecapQuestionPage,
    exact: true,
  },
  {
    path: '/history',
>>>>>>> a8ab0e9a8c79fcd9e1aab8530bd8d3f002570c78
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
