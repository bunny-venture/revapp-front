/**
 *
 * Asynchronously loads the component for QuestionnairePage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const QuestionnairePage = lazyLoad(
  () => import('./index'),
  module => module.QuestionnairePage,
);
