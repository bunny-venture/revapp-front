/* --- STATE --- */
export interface RecapState {
  isLoading: boolean;
  isSuccess: boolean;
  voucher: string;
  type: string;
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
}
