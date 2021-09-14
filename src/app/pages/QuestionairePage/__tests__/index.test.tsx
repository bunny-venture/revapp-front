import * as React from 'react';
import { render } from '@testing-library/react';

import { QuestionnairePage } from '..';

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: str => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));

describe('<QuestionnairePage  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<QuestionnairePage />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
