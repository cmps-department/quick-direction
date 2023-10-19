import { FC } from "react";
import { advantages } from "../../constants/advantages";
import AdvantageCard from "../../components/advantage-card/AdvantageCard";
import styles from './advantages.module.scss';
import Container from "../../../../components/container/Container";

const AdvantagesSection: FC = () => {
    return (
        <Container>
            <section>
                <div className={styles.advantages}>
                    <h2 className={styles.advantages_title}>Чому саме електронні довідки</h2>
                    <div className={styles.advantages_wrap}>
                        {advantages?.map(advantage => (
                        <AdvantageCard advantage={advantage} key={advantage.id} />
                        ))}
                    </div>
                </div>
            </section>
        </Container>
    )
}

export default AdvantagesSection
