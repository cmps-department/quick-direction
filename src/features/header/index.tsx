import { CSSProperties, FC } from "react";

import { signIn, signOut, useSession } from "next-auth/react";
import { useAppSelector } from "../../store";
import { useDispatch } from "react-redux";
import { toggle } from "../../store/navbarReducer";

import { Burger, Button, Flex, Text } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";

import styles from "./styles.module.scss";

interface HeaderProps {
    color: CSSProperties["backgroundColor"]
    margin?: CSSProperties["margin"]
}

const Header: FC<HeaderProps> = ({color, margin = "30px 30px 60px 30px"}) => {
    const { data: session } = useSession();
    const { isOpened } = useAppSelector(state => state.navbar);
    const dispatch = useDispatch();

    return (
        <header className={styles.header} style={{ backgroundColor: color, margin: margin }}>
            <Flex gap={60} align="center">
                {
                    session ? (
                        <Burger color="white" opened={isOpened} onClick={() => dispatch(toggle())}/>
                    ) : null
                }
                <Link className={styles.link} href="/">
                    Головна
                </Link>
                <Link className={styles.link} href="/faq">
                    Часті питання
                </Link>
                <Link className={styles.link} href="/about-us">
                    Про нас
                </Link>
            </Flex>

            <Link href={'/'}>
                <Image
                    width={75}
                    height={34}
                    src="/images/logo.webp"
                    alt="Logo"
                />
            </Link>

            <Flex gap={32} align="center" justify="flex-end">
                {
                    session ? (
                        <Text c="white" fw={600} fz={18}>{session.user.email}</Text>
                    ) : null
                }
                {
                    session ? (
                        <Button variant="outline" radius="xl" h={48} w={128} color='#fff' onClick={() => signOut({ callbackUrl: "/" })}>
                            <Text c="white" fz={18} fw={600}>Вихід</Text>
                        </Button>
                    ) : (
                        <Button radius="xl" h={48} w={128} color='#fff' onClick={() => signIn("keycloak")}>
                            <Text c="black" fz={18} fw={600}>Увійти</Text>
                        </Button>
                    )
                }
            </Flex>
        </header>
    )
}

export default Header;