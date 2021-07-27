/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

export const AccountActivatedPage = lazyLoad(
  () => import('./index'),
  module => module.AccountActivatedPage,
);
