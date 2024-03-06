import { FC } from 'react';
import AdvantagesSection from './containers/advantages';
import GuideSection from './containers/guide';
import HelpSection from './containers/help';

const HomePageView: FC = () => {
  return (
    <>
      <AdvantagesSection />
      <GuideSection />
      <HelpSection />
    </>
  );
};

export default HomePageView;
