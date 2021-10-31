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
  reviewId: '';
  reviewQuestionList: {
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
  examQuestionnaire: {
    results: [
      {
        id: string;
      },
    ];
  };
}
