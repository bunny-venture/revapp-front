/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

export const AnnouncementPage = lazyLoad(
  () => import('./index'),
  module => module.AnnouncementPage,
);
