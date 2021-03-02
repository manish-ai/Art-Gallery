import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import MainLayout from './layouts/MainLayout';
import LoginView from './views/auth/LoginView';
import NotFoundView from './views/errors/NotFoundView';
import RegisterView from './views/auth/RegisterView';
import LandingPageView from './views/LandingPage/index';
import ProductListScreen from './views/Admin/ProductListScreen';
import ProductEditScreen from './views/Admin/ProductEditScreen';


const routes = [
  {
    path: '/',
    element: <DashboardLayout />,
    children: [

      { path: '/', element: <LandingPageView /> },

      // { path: 'settings', element: <SettingsView /> },
      // { path: '*', element: <Navigate to="/404" /> },
      // { path: '404', element: <NotFoundView /> },
      { path: 'admin', element: <LoginView /> },
      // { path: '/', element: <Navigate to="/" /> },
    ]
  },
  {
    path: '/admin',
    element: <MainLayout />,
    children: [
      { path: '/', element: <LoginView /> },
      { path: '/productlist', element: < ProductListScreen /> },
      { path: '/productlist/:pageNumber', element: < ProductListScreen /> },
      { path: '/product/:id/edit', element: < ProductEditScreen /> },
      { path: 'register', element: <RegisterView /> },

      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
