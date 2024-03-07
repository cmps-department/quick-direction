import { useSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Header from '../Header';
import Container from '../../components/Container/Container';
import Frame from '../../components/Frame/Frame';
import CustomButton from '../../components/CustomButton/CustomButton';

import styles from './styles.module.scss';
import CustomDivider from '../../components/CustomDivider/CustomDivider';

const MainPageHeader = () => {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <div className={styles.header}>
      <div className={styles.headerBg}>
        <Header margin="0" color="transparent" />
      </div>

      <div className={styles.hBanner}>
        <Container>
          <Frame className={styles.hBanner_container}>
            <h2 className={styles.hBanner_title}>Що це таке?</h2>
            <CustomDivider/>
            <p className={styles.hBanner_text}>
              <span>Quick Direction</span> - це сервіс для легкого спілкування студентів з дирекцією. З нами ваша заявка
              точно не загубиться: заповнену форму одразу буде скеровано до спеціальних відділів дирекції НТУ “ХПІ”
              відповідно до обраного вами запиту.
            </p>
            <CustomButton
              className={styles.hBanner_btn}
              onClick={() =>
                session
                  ? router.push('/request-directions')
                  : signIn('keycloak', { callbackUrl: '/request-directions' })
              }
            >
              Подати заявку
            </CustomButton>
          </Frame>
        </Container>
      </div>
    </div>
  );
};

export default MainPageHeader;
