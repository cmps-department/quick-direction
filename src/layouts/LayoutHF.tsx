import { CSSProperties, FC, ReactNode } from 'react';

import { useRouter } from 'next/router';

import MainPageHeader from '../features/MainPageHeader';
import Footer from '../features/Footer';
import Header from '../features/Header';

interface LayoutHFProps {
  children: ReactNode;
  headerColor?: CSSProperties['backgroundColor'];
}

const LayoutHF: FC<LayoutHFProps> = ({ children, headerColor }) => {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <>
      {currentRoute === '/' ? <MainPageHeader /> : <Header color={headerColor} />}
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default LayoutHF;
