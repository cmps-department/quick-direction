import { FC } from "react";
import styles from "./styles.module.scss";
import CarouselC from "../../components/Carousel";
import ContainerL from "../../../../components/Container";
import { Text } from "@mantine/core";

const GuideSection: FC = () => {
    return (
        <section>
            <div className={styles.guide}>
                <ContainerL>
                    <Text m={0} className={"h1_font"}>Гайд для користувачів для заповнення інтернет-довідок і заяв:</Text>
                </ContainerL>
                <CarouselC />
            </div>
        </section>
    );
};

export default GuideSection;
