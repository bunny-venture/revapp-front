/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

export const ExamPage = lazyLoad(
  () => import('./index'),
  module => module.ExamPage,
);
