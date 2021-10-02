/* --- STATE --- */
export interface RecapState {
  isLoading: boolean;
  isSuccess: boolean;
  voucher: string;
  questions: {
    results: [
      {
        id: string;
      },
    ];
  };
}
