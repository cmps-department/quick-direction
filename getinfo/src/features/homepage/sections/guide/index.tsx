import { FC } from 'react'
import styles from './guide.module.scss'
import CarouselC from '../../../../components/carousel/Carousel';

const GuideSection: FC = () => {
  return (
    <section>
      <div className={styles.guide}>
        <h2 className={styles.guide_title}>Гайд для користувачів для заповнення інтернет-довідок і заяв:</h2>
        <CarouselC/>
      </div>
    </section>
  )
}

export default GuideSection
