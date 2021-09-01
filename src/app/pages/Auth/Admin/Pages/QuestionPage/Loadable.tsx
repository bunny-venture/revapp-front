/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

export const QuestionPage = lazyLoad(
  () => import('./index'),
  module => module.QuestionPage,
);
