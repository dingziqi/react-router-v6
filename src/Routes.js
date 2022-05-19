import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'animate.css';

import Layout from './components/Layout';

const HomePage = React.lazy(() => import('./pages/Home'));
const SecondPage = React.lazy(() => import('./pages/Second'));

function animatify(route) {
  route.element = (
    <div
      key={route.path}
      className="animate__animated animate__fast animate__fadeIn route-page"
    >
      <route.element />
    </div>
  );

  return route;
}

const routes = [
  { path: '/', index: true, element: HomePage },
  { path: '/second', element: SecondPage },
].map(animatify);

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {routes.map(({ index, path, element }) => (
          <Route index={index} key={path} path={path} element={element} />
        ))}
      </Route>
    </Routes>
  );
}
