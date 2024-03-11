export interface IAdvantage {
    id: number;
    title: string;
    description: string;
    image: string;
}

export const advantages: ReadonlyArray<IAdvantage> = [
    {
        id: 1,
        title: "Ефективність та швидкість обробки:",
        description: "Цифрові версії документів скорочують час обробки запитів студентів, автоматично розподіляючи їх між адміністраторами.",
        image: "/advantages/speedometer.svg",
    },
    {
        id: 2,
        title: "Зменшення помилок і невірностей:",
        description:
            "Система автоматичної обробки документів валідує введену студентами інформацію, що допомагає уникнути помилок та невірних даних.",
        image: "/advantages/analytic.svg",
    },
    {
        id: 3,
        title: "Зручність і доступність:",
        description: "Веб-додаток дозволяє студентам подавати запити та  отримувати відповіді з будь-якого місця, де є Інтернет.",
        image: "advantages/location.svg",
    },
    {
        id: 4,
        title: "Можливість відслідковування та аналізу:",
        description:
            "Система зберігає історію запитів та дій адміністраторів, що допомагає аналізувати статуси запитів та полегшує управління робочим процесом.",
        image: "/advantages/trueFalse.svg",
    },
];
