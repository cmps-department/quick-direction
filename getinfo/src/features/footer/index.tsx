import { FC } from 'react'
import styles from './footer.module.scss'
import Image from 'next/image'

import khpiImg from "../../assets/images/khpi-logo.svg"

const Footer: FC = () => {
  return (
    <footer>
      <div className={styles.footer}>
        <ul>
          <li>Контакти</li>
          <li>Соціальні мережі</li>
          <li>Про нас</li>
        </ul>
        <Image
          width={192}
          height={192}
          src={khpiImg}
          alt="Logo"
        />
        <div></div>
      </div>
    </footer>
  )
}

export default Footer
