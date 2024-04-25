import { FC } from "react";
import styles from "./styles.module.scss";
import CustomButton from "@/components/CustomButton";
import Container from "@/components/Container";
import { useRouter } from "next/router";
import routes from "@/constants/routes";
import { Text } from "@mantine/core";

const HelpSection: FC = () => {
    const router = useRouter();

    const handleEmailClick = () => {
        window.location.href = "mailto:omsroot@kpi.kharkov.ua";
    };

    return (
        <section>
            <Container>
                <div className={styles.help}>
                    <div className={styles.helpCard}>
                        <Text m={0} className={"h3_font"}>
                            Є запитання?
                        </Text>
                        <p className={styles.helpCard_desc}>Ймовірно, що відповідь на ваше запитання уже є в FAQ.</p>
                        <CustomButton className={styles.helpCard_btn} onClick={() => router.push(routes.INFORMATION)}>
                            Перейти до FAQ
                        </CustomButton>
                    </div>
                    <div className={styles.helpCard}>
                        <Text m={0} className={"h3_font"}>
                            Не знайшли відповідь?
                        </Text>
                        <p className={styles.helpCard_desc}>Наша технічна підтримка має відповіді на решту запитань.</p>
                        <CustomButton className={styles.helpCard_btn} onClick={handleEmailClick}>
                            Задати питання
                        </CustomButton>
                    </div>
                    <div className={styles.helpCard}>
                        <Text m={0} className={"h3_font"}>
                            Не маєте запитань?
                        </Text>
                        <p className={styles.helpCard_desc}>Подайте заявку на отримання довідки прямо зараз!</p>
                        <CustomButton className={styles.helpCard_btn} onClick={() => router.push(routes.REQUEST_DIRECTIONS)}>
                            Подати заявку
                        </CustomButton>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default HelpSection;
