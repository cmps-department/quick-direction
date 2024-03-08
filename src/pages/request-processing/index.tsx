import PageLayout from '../../layouts/PageLayout';
import LayoutHF from '../../layouts/LayoutHF';
import RequestProcessingView from '../../features/RequestProcessingView';

export default function RequestProcessingPage() {
  return (
    <PageLayout title={'Request Processing'}>
      <LayoutHF headerColor="#2A2A2A">
        <RequestProcessingView />
      </LayoutHF>
    </PageLayout>
  );
}
