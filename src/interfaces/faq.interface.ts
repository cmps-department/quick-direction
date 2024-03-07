export interface IFaq {
  question: String;
  answer: String;
  questionType: QuestionType;
  documentLink: String;
}

export interface IFaqResponse extends IFaq {
  id: number;
  createdAt: string;
  updatedAt: string;
}

export enum QuestionType {
  General = 'Загальна Інформація',
  Application = 'Подача Заявок',
  Administration = 'Взаємодія з Дирекцією',
  Technical = 'Технічні Питання',
}
