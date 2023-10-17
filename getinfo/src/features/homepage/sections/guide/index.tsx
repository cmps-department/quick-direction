import { FC } from 'react'
import styles from './guide.module.scss'
import CarouselC from '../../../../components/carousel/Carousel';
import ContainerL from '../../../../layouts/ContainerL';

const GuideSection: FC = () => {
  return (
    <section>
      <div className={styles.guide}>
        <ContainerL>
          <h2 className={styles.guide_title}>Гайд для користувачів для заповнення інтернет-довідок і заяв:</h2>
        </ContainerL>
        <CarouselC />
      </div>
    </section>
  )
}

export default GuideSection
