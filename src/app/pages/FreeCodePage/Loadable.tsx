/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

export const FreeCodePage = lazyLoad(
  () => import('./index'),
  module => module.FreeCodePage,
);
