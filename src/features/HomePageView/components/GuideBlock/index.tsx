import Container from "@/components/Container";
import styles from "./styles.module.scss";

interface IGuideBlock {
    title: string;
    list: string[];
    index: number;
}

const GuideBlock = ({ title, list }: IGuideBlock) => {
    return (
        <Container>
            <div className={styles.guideBlock}>
                <div className={styles.guideBlock_info}>
                    <h3 className={styles.guideBlock_title}>{title}</h3>
                    <ul className={styles.guideBlock_list}>
                        {list?.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles.block}></div>
            </div>
        </Container>
    );
};

export default GuideBlock;
