/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

export const VerifyEmailAddressPage = lazyLoad(
  () => import('./index'),
  module => module.VerifyEmailAddressPage,
);
