import React, { FC } from 'react';
import CategoriesView from '../../../features/CategoriesView';
import PageLayout from '../../../layouts/PageLayout';
import LayoutHF from '../../../layouts/LayoutHF';

const CategoriesPage: FC = () => {
  return (
    <PageLayout title={'Categories'}>
      <LayoutHF headerColor="#2A2A2A">
        <CategoriesView />
      </LayoutHF>
    </PageLayout>
  );
};

export default CategoriesPage;
