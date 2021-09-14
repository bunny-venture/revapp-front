/**
 *
 * QuestionnairePage
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { ROUTE } from '../../../utils/constant';
import { Review } from './Pages/Review';
import { Exam } from './Pages/Exam';
import { messages } from './messages';

interface Props {}

export function QuestionnairePage(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <BrowserRouter>
      <Switch>
        <Route path={`${ROUTE.REVIEW}`} component={Review} exact />
        <Route path={`${ROUTE.EXAM}`} component={Exam} exact />
      </Switch>
    </BrowserRouter>
  );
}

const Div = styled.div``;
