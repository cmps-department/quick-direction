import { FC } from "react"
import Image from 'next/image'
import styles from './header.module.scss'

import logoImg from '../../assets/images/logo.svg'
import Link from "next/link"
import CustomButton from "../../components/button/CustomButton"


const Header: FC = () => {
  return (
    <header>
      <div className={styles.header}>
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
                  src={logoImg}
                  alt="Logo"
                />
              </Link>
            </div>
            <div className={styles.navbarRight}>
              <Link href={'/'}>Увійти</Link>
              <CustomButton onClick={() => {}} className="">
                Зареєструватися
              </CustomButton>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
