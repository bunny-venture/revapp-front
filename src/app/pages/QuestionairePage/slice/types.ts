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
  reviewQuestionnaire: {
    results: [
      {
        id: string;
      },
    ];
  };
  examQuestionnaire: {
    results: [
      {
        id: string;
      },
    ];
  };
}
