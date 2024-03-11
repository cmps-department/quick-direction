interface IFaq {
    question: String;
    answer: String;
    questionType: QuestionType;
    documentLink: String;
}

interface IFaqResponse extends IFaq {
    id: number;
    createdAt: string;
    updatedAt: string;
}

enum QuestionType {
    General = "Загальна Інформація",
    Application = "Подача Заявок",
    Administration = "Взаємодія з Дирекцією",
    Technical = "Технічні Питання",
}
