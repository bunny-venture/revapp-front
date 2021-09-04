/**
 *
 * Asynchronously loads the component for QuestionairePage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const QuestionairePage = lazyLoad(
  () => import('./index'),
  module => module.QuestionairePage,
);
