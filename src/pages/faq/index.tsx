import FaqView from '../../features/FaqView';
import LayoutHF from '../../layouts/LayoutHF';
import PageLayout from '../../layouts/PageLayout';

export default function RequestProcessingPage() {
  return (
    <PageLayout title={'Request Processing'}>
      <LayoutHF headerColor="#02808F">
        <FaqView />
      </LayoutHF>
    </PageLayout>
  );
}
