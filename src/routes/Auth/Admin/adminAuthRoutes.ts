import { ProfilePage } from '../../../app/pages/Auth/Admin/Pages/ProfilePage/Loadable';
import { UsersPage } from '../../../app/pages/Auth/Admin/Pages/UsersPage/Loadable';
import { QuestionPage } from '../../../app/pages/Auth/Admin/Pages/QuestionPage/Loadable';
import { NewsPage } from '../../../app/pages/Auth/Admin/Pages/NewsPage/Loadable';
import { SubscriptionPage } from '../../../app/pages/Auth/Admin/Pages/SubscriptionPage/Loadable';
import { InquiryPage } from '../../../app/pages/Auth/Admin/Pages/InquiryPage/Loadable';
import { StatisticsPage } from '../../../app/pages/Auth/Admin/Pages/StatisticsPage/Loadable';
import { HistoryPage } from '../../../app/pages/Auth/Admin/Pages/HistoryPage/Loadable';

export const adminAuthRoutes = [
  {
    path: '/admin/profile',
    name: 'Profile',
    component: ProfilePage,
    exact: true,
  },
  {
    path: '/admin/users',
    name: 'Users',
    component: UsersPage,
    exact: true,
  },
  {
    path: '/admin/questions',
    name: 'Questions',
    component: QuestionPage,
    exact: true,
  },
  {
    path: '/admin/news',
    name: 'News',
    component: NewsPage,
    exact: true,
  },
  {
    path: '/admin/subscription',
    name: 'Subscription',
    component: SubscriptionPage,
    exact: true,
  },
  {
    path: '/admin/inquiry',
    name: 'Inquiry',
    component: InquiryPage,
    exact: true,
  },
  {
    path: '/admin/statistics',
    name: 'Statistics',
    component: StatisticsPage,
    exact: true,
  },
  {
    path: '/admin/history',
    name: 'History',
    component: HistoryPage,
    exact: true,
  },
];
