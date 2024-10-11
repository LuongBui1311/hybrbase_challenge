import { Suspense, lazy } from 'react';
import { RouteObject } from 'react-router-dom';
const ProductDetailPage = lazy(() => import('.'));

export const ProductDetailRoute: RouteObject = {
  path: '/productdetail/:slug',
  element: (
    <Suspense fallback={<div>Loading</div>}>
      <ProductDetailPage />
    </Suspense>
  ),
};
