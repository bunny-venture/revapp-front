/* --- STATE --- */
export interface QuestionnaireState {
  isLoading: boolean;
  isGenerate: boolean;
  questionCount: number;
  difficulty: string;
  cognitive: string;
  typeId: string;
  subjectId: string;
  topicId: string;
  subtopicId: string;
}
