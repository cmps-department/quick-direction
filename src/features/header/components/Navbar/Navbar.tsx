import Image from 'next/image';
import Link from 'next/link';
import { FC, PropsWithChildren } from 'react';

import styles from './navbar.module.scss';

interface INavbar {
    className?: string,
    children?: React.ReactNode
}

const Navbar: FC<INavbar> = ({children, className}) => {
    return (
        <nav className={className}>
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
                    {children}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
