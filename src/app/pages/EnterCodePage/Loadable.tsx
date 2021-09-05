/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

export const EnterCodePage = lazyLoad(
  () => import('./index'),
  module => module.EnterCodePage,
);
