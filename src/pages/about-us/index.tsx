import AboutUsView from '../../features/AboutUsView';
import LayoutHF from '../../layouts/LayoutHF';
import PageLayout from '../../layouts/PageLayout';

export default function AboutUsPage() {
  return (
    <PageLayout title={'About'}>
      <LayoutHF headerColor="#02808F">
        <AboutUsView/>
      </LayoutHF>
    </PageLayout>
  );
}
