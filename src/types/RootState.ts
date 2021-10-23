import { GlobalState } from 'app/global/slice/types';
import { QuestionState } from 'app/pages/QuestionPage/slice/types';
import { VoucherState } from 'app/pages/FreeCodePage/slice/types';
import { SignupState } from 'app/pages/SignUpPage/slice/types';
import { LoginState } from 'app/pages/LoginPage/slice/types';
import { QuestionnaireState } from 'app/pages/QuestionairePage/slice/types';
import { RecapState } from 'app/pages/RecapPage/slice/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  global?: GlobalState;
  question?: QuestionState;
  voucher?: VoucherState;
  signup?: SignupState;
  login?: LoginState;
  questionnaire?: QuestionnaireState;
  recap?: RecapState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
