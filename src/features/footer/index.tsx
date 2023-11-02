import { FC } from 'react'
import styles from './footer.module.scss'
import Image from 'next/image'

import ContainerL from '../../components/Container/Container'

const Footer: FC = () => {
  return (
    <footer>
      <div className={styles.footer}>
        <div className={styles.footer_line}></div>
        <ContainerL className={styles.footer_container}>
          <ul>
            <li>Контакти</li>
            <li>Соціальні мережі</li>
            <li>Про нас</li>
          </ul>
          <div className={styles.footer_img}>
            <Image
              width={192}
              height={192}
              src="/images/khpi-logo.webp"
              alt="Logo"
            />
          </div>
          <div></div>
        </ContainerL>
      </div>
    </footer>
  )
}

export default Footer
