import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { ProductListRoute } from '../pages/ProductList/ProductList.routes';
import { ProductDetailRoute } from '../pages/ProductDetail/ProductDetail.routes';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      ProductListRoute,
      ProductDetailRoute,
    ],
  },
]);

export default routes;
