/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

export const StatisticsPage = lazyLoad(
  () => import('./index'),
  module => module.StatisticsPage,
);
