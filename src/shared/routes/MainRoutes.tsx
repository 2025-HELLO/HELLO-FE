import type { RouteObject } from 'react-router-dom';
import { PATH } from '@shared/constants/path';
import Layout from '@shared/components/layout/Layout';

import Home from '@/pages/home/page/Home';
import Signup from '@/pages/signup/page/Signup';

export const MainRoutes: RouteObject[] = [
  {
    element: <Layout />,
    children: [
      {
        path: PATH.ROOT,
        element: <Home />,
      },
      {
        path: PATH.SIGNUP,
        element: <Signup />,
      },
    ],
  },
];
