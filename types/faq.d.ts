interface IFaq {
    question: string;
    answer: string;
    questionType: string;
    documentLink: string;
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
