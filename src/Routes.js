import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import 'animate.css';

import Layout from './components/Layout';

const HomePage = React.lazy(() => import('./pages/Home'));
const SecondPage = React.lazy(() => import('./pages/Second'));

function animatify(route) {
  route.element = (
    <div className="animate__animated animate__fast animate__fadeIn">
      {<route.element />}
    </div>
  );

  return route;
}

const routes = [
  { path: '/', element: HomePage },
  { path: '/second', element: SecondPage },
].map(animatify);

export default function AppRoutes() {
  return (
    <Router>
      <React.Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            {routes.map((route) => (
              <Route path={route.path} element={route.element} />
            ))}
          </Route>
        </Routes>
      </React.Suspense>
    </Router>
  );
}
