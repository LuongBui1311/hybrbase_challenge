import { Suspense, lazy } from 'react';
import { RouteObject } from 'react-router-dom';
const ProductListPage = lazy(() => import('.'));

export const ProductListRoute: RouteObject = {
  path: 'products',
  element: (
    <Suspense fallback={<div>Loading</div>}>
      <ProductListPage />
    </Suspense>
  ),
};
