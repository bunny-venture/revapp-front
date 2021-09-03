import { QuestionnaireState } from 'app/pages/QuestionPage/slice/types';
import { VoucherState } from 'app/pages/FreeCodePage/slice/types';
import { SignupState } from 'app/pages/SignUpPage/slice/types';
import { LoginState } from 'app/pages/LoginPage/slice/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  questionnaire?: QuestionnaireState;
  voucher?: VoucherState;
  signup?: SignupState;
  login?: LoginState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
