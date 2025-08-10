import type { RouteObject } from 'react-router-dom';
import { PATH } from '@shared/constants/path';
import Layout from '@shared/components/layout/Layout';

import PageHeader from '@/common/components/header/PageHeader';
import Header from '@/common/components/header/Header';
import Home from '@/pages/home/page/Home';
import Signup from '@/pages/signup/page/Signup';

export const MainRoutes: RouteObject[] = [
  // 기본 헤더
  {
    element: <Layout header={<Header />} />,
    children: [{ path: PATH.ROOT, element: <Home /> }],
  },
  // 회원가입
  {
    element: <Layout header={<PageHeader title="회원가입" />} />,
    children: [{ path: PATH.SIGNUP, element: <Signup /> }],
  },
];
