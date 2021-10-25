/* --- STATE --- */
export interface QuestionnaireState {
  isLoading: boolean;
  typeReview: string;
  typeExam: string;
  isGenerate: boolean;
  questionCount: number;
  difficulty: string;
  cognitive: string;
  typeId: string;
  subjectId: string;
  topicId: string;
  subtopicId: string;
  reviewQuestion: {
    results: [
      {
        id: string;
      },
    ];
  };
}
