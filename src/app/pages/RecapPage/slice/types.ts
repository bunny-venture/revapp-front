/* --- STATE --- */
export interface RecapState {
  isLoading: boolean;
  isValid: boolean;
  type: string;
  code: string;
  questionnaire: {
    results: [
      {
        id: string;
      },
    ];
  };
  questionList: {
    questions: [
      {
        question: {
          situation: string;
          question: string;
          choiceA: string;
          choiceB: string;
          choiceC: string;
          choiceD: string;
          answer: string;
          explanation: string;
        };
      },
    ];
  };
  questionId: string;
  voucher: string;
  isError: boolean;
}
