import { IAdvantage } from "../../constants/advantages";
import Image from "next/image";
import styles from "./styles.module.scss";

const AdvantageCard = ({ advantage }: { advantage: IAdvantage }) => {
    return (
        <div className={styles.advantageCard}>
            <Image width={90} height={90} src={advantage.image} alt="Icon" />
            <div>
                <h4 className={`h3_font ${styles.advantageCard_title}`}>{advantage.title}</h4>
                <p className={`main_font ${styles.advantageCard_desc}`}>{advantage.description}</p>
            </div>
        </div>
    );
};

export default AdvantageCard;
