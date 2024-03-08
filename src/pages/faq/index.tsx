import FaqView from '../../features/FaqView';
import LayoutHF from '../../layouts/LayoutHF';
import PageLayout from '../../layouts/PageLayout';

export default function FaqPage() {
  return (
    <PageLayout title={'FAQ'}>
      <LayoutHF headerColor="#02808F">
        <FaqView />
      </LayoutHF>
    </PageLayout>
  );
}
