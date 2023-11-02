import Image from 'next/image';
import styles from './header.module.scss';

import Link from "next/link";
import CustomButton from "../../components/CustomButton/CustomButton";
import Container from "../../components/Container/Container";
import { Button } from "@mantine/core";

import { useSession, signIn, signOut } from 'next-auth/react';

import { useRouter } from 'next/navigation';

const Header = () => {
    const { data: session } = useSession();
    const router = useRouter();

    return (
        <header>
            <div className={styles.header}>
                <div className={styles.headerBg}>
                    <nav>
                        <div className={styles.navbar}>
                            <div className={styles.navbarLeft}>
                                <Link href={'/'}>Новини</Link>
                                <Link href={'/'}>Інформація</Link>
                                <Link href={'/'}>Про нас</Link>
                            </div>
                            <div className={styles.navbarLogo}>
                                <Link href={'/'}>
                                    <Image
                                        width={75}
                                        height={34}
                                        src="/images/logo.webp"
                                        alt="Logo"
                                    />
                                </Link>
                            </div>
                            <div className={styles.flexBlock}>
                                {session ? (
                                    <Button radius="xl" h={48} w={128} color='#fff' style={{color: "#000"}} onClick={() => signOut({ callbackUrl: "/" })}>
                                        Вихід
                                    </Button>
                                ): (
                                    <Button radius="xl" h={48} w={128} color='#fff' style={{color: "#000"}} onClick={() => signIn("keycloak")}>
                                        Увійти
                                    </Button>
                                )
                            }
                            </div>
                        </div>
                    </nav>
                </div>

                <div className={styles.hBanner}>
                    <Container className={styles.hBanner_container}>
                        <h2 className={styles.hBanner_title}>Що це таке?</h2>
                        <div className={styles.hBanner_line}></div>
                        <p className={styles.hBanner_text}><span>Quick Direction</span> - це сервіс для легкого спілкування студентів з дирекцією. З нами ваша заявка точно не загубиться: заповнену форму одразу буде скеровано до спеціальних відділів дирекції НТУ “ХПІ” відповідно до обраного вами запиту.</p>
                        <CustomButton className={styles.hBanner_btn} onClick={() => session ? router.push("/request-directions") : signIn("keycloak", { callbackUrl: "/request-directions" })} >
                            Подати заявку
                        </CustomButton>
                    </Container>
                </div>

            </div>
        </header>
    )
}

export default Header
