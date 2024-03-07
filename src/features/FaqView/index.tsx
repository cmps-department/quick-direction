import { FC } from 'react';
import Information from './containers/Information';
import Faq from './components/Faq';

const FaqView: FC = () => {
  return (
    <>
      <Information />
      <Faq />
    </>
  );
};

export default FaqView;
