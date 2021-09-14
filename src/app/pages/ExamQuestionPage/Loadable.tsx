/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

export const ExamQuestionPage = lazyLoad(
  () => import('./index'),
  module => module.ExamQuestionPage,
);
