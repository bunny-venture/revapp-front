/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

export const ReviewPage = lazyLoad(
  () => import('./index'),
  module => module.ReviewPage,
);
