import { FC } from "react"

import styles from './guideBlock.module.scss'

const GuideBlock: FC = () => {
    return (
        <div className={styles.guideBlock}>
            <div className={styles.guideBlock_info}>
                <h3 className={styles.guideBlock_title}>Заповнення та відправлення заявки або замовлення довідки:</h3>
                <ul className={styles.guideBlock_list}>
                    <li>Увійдіть на веб-сайт університету та перейдіть на сторінку для подачі заявок та довідок.</li>
                    <li>Виберіть тип заявки або довідки, яку вам необхідно подати (наприклад, "Нарахування додаткових балів до стипендіального рейтингу").</li>
                    <li>Завантажте зразок оформлення заяви та бланк заяви або довідки на свій комп'ютер.</li>
                    <li>Відкрийте бланк у текстовому або графічному редакторі та заповніть його відповідно до ваших потреб і вимог університету.</li>
                    <li>Після заповнення бланку, збережіть файл на своєму комп'ютері.</li>
                </ul>
            </div>
            <div className={styles.block}></div>
        </div>
    )
}

export default GuideBlock
