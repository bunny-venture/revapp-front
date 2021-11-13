const URL = process.env.REACT_APP_API
  ? `${process.env.REACT_APP_API}`
  : `https://api-revapp.herokuapp.com/v1/`;

export const COOKIE_PREFIX = 'revapp_';
export const COOKIE_EXPIRES_DAYS = 1;

export const API = {
  AUTH_LOGIN: `${URL}auth/login`,
  AUTH_REGISTER: `${URL}auth/register`,
  VOUCHER: `${URL}vouchers`,
  SUBJECT: `${URL}subjects`,
  QUESTION_TYPE: `${URL}question-types`,
  QUESTION: `${URL}questions`,
  QUESTIONNAIRE: `${URL}questionnaire`,
  USER: `${URL}users`,
};

export const ROUTE = {
  HOME: '/',
  LOGIN: '/login',
  SIGNUP: '/signup',
  ANNOUNCEMENT: '/announcement',
  PROFILE: '/profile',
  REVIEW: '/review',
  REVIEW_QUESTION: '/review/questions/:reviewId',
  EXAM: '/exam',
  EXAM_QUESTION: '/exam/questions/:examId',
  RECAP: '/recap',
  RECAP_QUESTION: '/recap/:questionId',
  HISTORY: '/history',
  STATISTICS: '/statistics',
};

export const LOADING_PREFIX = {
  Login: 'login',
  Signup: 'signup',
  Review: 'review',
  ReviewQuestion: 'reviewQuestion',
  ExamQuestion: 'examQuestion',
  Exam: 'exam',
  Recap: 'recap',
  Questionnaire: 'questionnaire',
};

export const GET_REQUEST = 'GET';
export const POST_REQUEST = 'POST';
export const PUT_REQUEST = 'PUT';
export const PATCH_REQUEST = 'PATCH';
export const DELETE_REQUEST = 'DELETE';
