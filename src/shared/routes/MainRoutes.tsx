import type { RouteObject } from 'react-router-dom';
import { PATH } from '@shared/constants/path';
import Home from '@/pages/home/page/Home';
import Layout from '@shared/components/layout/Layout';

export const MainRoutes: RouteObject[] = [
  {
    element: <Layout />,
    children: [
      {
        path: PATH.ROOT,
        element: <Home />,
      },
    ],
  },
];
