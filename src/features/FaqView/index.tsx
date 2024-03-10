import { FC } from 'react';
import Information from './containers/Information';
import FaqLayout from './components/FaqLayout';
import Container from '../../components/Container/Container';
import SupportInfo from './containers/SupportInfo';

const FaqView: FC = () => {
  return (
    <Container>
      <Information />
      <FaqLayout />
      <SupportInfo/>
    </Container>
  );
};

export default FaqView;
