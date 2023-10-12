import speedometerImg from '../../assets/images/advantages/speedometer.png';
import analyticImg from '../../assets/images/advantages/analytic.png';
import locationImg from '../../assets/images/advantages/location.png';
import trueFalseImg from '../../assets/images/advantages/true-false.png';
import { StaticImageData } from 'next/image';

export interface IAdvantage {
    id: number,
    title: string,
    description: string,
    image: StaticImageData
}


export const advantages: ReadonlyArray<IAdvantage> = [
    {
        id: 1,
        title: 'Ефективність та швидкість обробки:',
        description: 'Цифрові версії документів скорочують час обробки запитів студентів, автоматично розподіляючи їх між адміністраторами.',
        image: speedometerImg
    },
    {
        id: 2,
        title: 'Зменшення помилок і невірностей:',
        description: 'Система автоматичної обробки документів валідує введену студентами інформацію, що допомагає уникнути помилок та невірних даних.',
        image: analyticImg
    },
    {
        id: 3,
        title: 'Зручність і доступність:',
        description: 'Веб-додаток дозволяє студентам подавати запити та  отримувати відповіді з будь-якого місця, де є Інтернет.',
        image: locationImg
    },
    {
        id: 4,
        title: 'Можливість відслідковування та аналізу:',
        description: 'Система зберігає історію запитів та дій адміністраторів, що допомагає аналізувати статуси запитів та полегшує управління робочим процесом.',
        image: trueFalseImg
    },
]