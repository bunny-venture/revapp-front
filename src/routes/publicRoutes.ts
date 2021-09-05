import { ROUTE } from 'utils/constant';
import { HomePage } from '../app/pages/HomePage/Loadable';
import { LoginPage } from '../app/pages/LoginPage/Loadable';
import { ForgotPasswordPage } from '../app/pages/ForgotPasswordPage/Loadable';
import { ResetPasswordPage } from '../app/pages/ResetPasswordPage/Loadable';
import { SignUpPage } from '../app/pages/SignUpPage/Loadable';
import { VerifyEmailAddressPage } from '../app/pages/VerifyEmailAddressPage';
import { AccountActivatedPage } from '../app/pages/AccountActivatedPage/Loadable';
import { FreeCodePage } from '../app/pages/FreeCodePage/Loadable';
import { QuestionPage } from '../app/pages/QuestionPage/Loadable';
import { EnterCodePage } from '../app/pages/EnterCodePage/Loadable';
import { StoryBook } from '../app/pages/StoryBook/Loadable';

export const guestRoutes = [
  {
    path: ROUTE.HOME,
    name: 'Home Page',
    component: HomePage,
    exact: true,
  },
  {
    path: ROUTE.LOGIN,
    name: 'Login Page',
    component: LoginPage,
    exact: true,
  },
  {
    path: '/forgot-password',
    name: 'Forgot Password Page',
    component: ForgotPasswordPage,
    exact: true,
  },
  {
    path: '/reset-password',
    name: 'Reset Password Page',
    component: ResetPasswordPage,
    exact: true,
  },
  {
    path: ROUTE.SIGNUP,
    name: 'Sign Up Page',
    component: SignUpPage,
    exact: true,
  },
  {
    path: '/verify-email',
    name: 'Verify Email Address Page',
    component: VerifyEmailAddressPage,
    exact: true,
  },
  {
    path: '/account-activated',
    name: 'Account Activated Page',
    component: AccountActivatedPage,
    exact: true,
  },
  {
    path: '/free-code',
    name: 'Free Code Page',
    component: FreeCodePage,
    exact: true,
  },
  {
    path: '/enter-code',
    name: 'Enter Code Page',
    component: EnterCodePage,
    exact: true,
  },
  {
    path: '/questions',
    name: 'Questions',
    component: QuestionPage,
    exact: true,
  },
  {
    path: '/storybook',
    name: 'Story Book',
    component: StoryBook,
    exact: true,
  },
];
