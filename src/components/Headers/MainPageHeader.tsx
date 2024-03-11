import { FC, ReactNode } from "react";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

import Container from "../Container";
import Frame from "../Frame";
import CustomButton from "../CustomButton";

import styles from "./styles.module.scss";
import { Box, Text } from "@mantine/core";

import classes from "./styles.module.scss";
import HeroCarousel from "../HeroCarousel";
import routes from "@/constants/routes";

interface MainPageHeaderProps {
    children: ReactNode;
}

const MainPageHeader: FC<MainPageHeaderProps> = ({ children }) => {
    const { data: session } = useSession();
    const router = useRouter();

    return (
        <Box className={classes.mainPageHeader}>
            <Box className={classes.headerBg}>
                <Box className={classes.headerNav}>{children}</Box>
                <HeroCarousel />
            </Box>

            <Box className={styles.hBanner}>
                <Container>
                    <Frame className={styles.hBanner_container}>
                        <Text mb={24} className={styles.hBanner_title}>
                            Що це таке?
                        </Text>
                        <Box className={styles.hBanner_line}></Box>
                        <Text className={styles.hBanner_text}>
                            <Text span>Quick Direction</Text> - це сервіс для легкого спілкування студентів з дирекцією. З нами ваша заявка точно не
                            загубиться: заповнену форму одразу буде скеровано до спеціальних відділів дирекції НТУ “ХПІ” відповідно до обраного вами
                            запиту.
                        </Text>
                        <CustomButton
                            className={styles.hBanner_btn}
                            onClick={() =>
                                session ? router.push(routes.REQUEST_DIRECTIONS) : signIn("keycloak", { callbackUrl: routes.REQUEST_DIRECTIONS })
                            }
                        >
                            Подати заявку
                        </CustomButton>
                    </Frame>
                </Container>
            </Box>
        </Box>
    );
};

export default MainPageHeader;
