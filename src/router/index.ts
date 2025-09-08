import { createElement } from 'react';
import { createHashRouter, Navigate, type RouteObject } from 'react-router';
import Home from '@/pages/Home';
import Page403 from '@/pages/Page403';
import Page404 from '@/pages/Page404';
import AI from '@/pages/AI';

const routes: RouteObject[] = [
  {
    path: '/',
    element: createElement(Home)
  },
  { path: '/ai', element: createElement(AI) },
  {
    path: '*',
    element: createElement(Navigate, { to: '/404', replace: true })
  },

  {
    path: '/403',
    element: createElement(Page403)
  },
  {
    path: '/404',
    element: createElement(Page404)
  }
];

export default createHashRouter(routes);
