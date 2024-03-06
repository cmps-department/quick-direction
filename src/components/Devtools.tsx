import { Suspense, lazy } from 'react';

const ReactQueryDevtoolsProduction = lazy(() =>
  import('@tanstack/react-query-devtools').then(d => ({
    default: d.ReactQueryDevtools,
  })),
);

export default function Devtools() {
  return (
    <Suspense fallback={null}>
      <ReactQueryDevtoolsProduction position="bottom-right" />
    </Suspense>
  );
}
