import * as React from 'react';
import { render } from '@testing-library/react';

import { QuestionairePage } from '..';

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

describe('<QuestionairePage  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<QuestionairePage />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
