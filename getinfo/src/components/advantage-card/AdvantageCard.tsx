import { IAdvantage } from '../../constants/homepage/homepage'
import Image from 'next/image'

import styles from './advCard.module.scss'

const AdvantageCard = ({ advantage }: { advantage: IAdvantage }) => {
    return (
        <div className={styles.advantageCard}>
            <Image
                width={90}
                height={90}
                src={advantage.image.src}
                alt="Icon"
            />
            <div>
                <h4 className={styles.advantageCard_title}>{advantage.title}</h4>
                <p className={styles.advantageCard_desc}>{advantage.description}</p>
            </div>
        </div>
    )
}

export default AdvantageCard
