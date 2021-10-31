/**
 *
 * QuestionnairePage
 *
 */
import * as React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { ROUTE } from '../../../utils/constant';
import { ExamQuestionPage } from './Pages/ExamQuestionPage';
import { ReviewQuestionPage } from './Pages/ReviewQuestionPage';
import { Review } from './Pages/Review';
import { Exam } from './Pages/Exam';

export function QuestionnairePage() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={`${ROUTE.REVIEW}`} component={Review} exact />
        <Route
          path={`${ROUTE.REVIEW_QUESTION}`}
          component={ReviewQuestionPage}
          exact
        />
        <Route path={`${ROUTE.EXAM}`} component={Exam} exact />
        <Route
          path={`${ROUTE.EXAM_QUESTION}`}
          component={ExamQuestionPage}
          exact
        />
      </Switch>
    </BrowserRouter>
  );
}
