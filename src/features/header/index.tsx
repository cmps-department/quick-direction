import { CSSProperties, FC } from "react";

import { signIn, signOut, useSession } from "next-auth/react";

import { Button, Flex, Text } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";

import styles from "./styles.module.scss";
import Links from "./components/Links";

interface HeaderProps {
    color: CSSProperties["backgroundColor"]
    margin?: CSSProperties["margin"]
}

const Header: FC<HeaderProps> = ({color, margin = "30px 30px 60px 30px"}) => {
    const { data: session } = useSession();
    return (
        <header className={styles.header} style={{ backgroundColor: color, margin: margin }}>
            <Flex w="100%" justify="space-between" align="center">
                <Flex w={"40%"} gap={60} align="center">
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

                <Flex>
                    <Link href={'/'}>
                        <Image
                            width={75}
                            height={34}
                            src="/images/logo.webp"
                            alt="Logo"
                        />
                    </Link>
                </Flex>

                <Flex w={"40%"} gap={32} align="center" justify="flex-end">
                    {
                        <Links />
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
            </Flex>
        </header>
    )
}

export default Header;