/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

export const RecapQuestionPage = lazyLoad(
  () => import('./index'),
  module => module.RecapQuestionPage,
);
