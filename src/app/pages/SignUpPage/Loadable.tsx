/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

export const SignUpPage = lazyLoad(
  () => import('./index'),
  module => module.SignUpPage,
);
