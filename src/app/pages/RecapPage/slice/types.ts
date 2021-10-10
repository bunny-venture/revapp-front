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
  question: {};
  questionId: string;
}
