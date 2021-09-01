/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

export const SubscriptionPage = lazyLoad(
  () => import('./index'),
  module => module.SubscriptionPage,
);
