import { FC } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

import { Icon } from '@iconify/react';
import { Indicator, UnstyledButton } from '@mantine/core';
import Image from 'next/image';

import styles from '../styles.module.scss';

const Links: FC = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const renderLinks = () => {
    if (session?.roles.includes('ROLE_ADMIN')) {
      return (
        <>
          <UnstyledButton onClick={() => router.push('/admin/categories')}>
            <Image src="/images/list.png" width={36} height={36} alt="categories" />
          </UnstyledButton>
          <UnstyledButton onClick={() => router.push('/admin/faq')}>
            <Icon width={36} height={36} color="#fff" icon="material-symbols:help-outline" />
          </UnstyledButton>
          <UnstyledButton onClick={() => router.push('/request-processing')}>
            <Image src="/images/envelope.png" width={36} height={36} alt="categories" />
          </UnstyledButton>
        </>
      );
    } else if (session?.roles.includes('ROLE_TEACHER')) {
      return (
        <>
          {router.pathname.startsWith('/request-processing') ? null : (
            <Indicator
              styles={{ indicator: { height: '10px', width: '10px', top: '3px', right: '-5px' } }}
              color="#E4FDE0"
            >
              <UnstyledButton className={styles.link} onClick={() => router.push('/request-processing')}>
                Заявки
              </UnstyledButton>
            </Indicator>
          )}
        </>
      );
    } else {
      return (
        <>
          {router.pathname.startsWith('/request-processing') ? null : (
            <UnstyledButton className={styles.link} onClick={() => router.push('/request-processing')}>
              Мої заявки
            </UnstyledButton>
          )}
          {router.pathname.startsWith('/request-directions') ? null : (
            <UnstyledButton className={styles.link} onClick={() => router.push('/request-directions')}>
              Подати заявку
            </UnstyledButton>
          )}
        </>
      );
    }
  };

  return <>{session ? renderLinks() : null}</>;
};

export default Links;
