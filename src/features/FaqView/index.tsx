import { FC } from 'react';
import Information from './containers/Information';
import FaqLayout from './components/FaqLayout';
import Container from '../../components/Container/Container';

const FaqView: FC = () => {
  return (
    <Container>
      <Information />
      <FaqLayout />
    </Container>
  );
};

export default FaqView;
