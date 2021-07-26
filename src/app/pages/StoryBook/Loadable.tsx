/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

export const StoryBook = lazyLoad(
  () => import('./index'),
  module => module.StoryBook,
);
