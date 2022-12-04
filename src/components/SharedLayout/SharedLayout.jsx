import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Navigation from '../Navigation/Navigation';

const SharedLayout = () => {
  return (
    <>
      <Navigation />
      <Suspense  fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default SharedLayout;
