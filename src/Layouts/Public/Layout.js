import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

import ROUTES, { RenderRoutes } from '../../publicRoutes';
import LoadingSimple from '../../UI/LoadingSimple/LoadingSimple';

const Layout = ({ children }) => {
  return (
    <>
      Navigation for Public Routes
      <Suspense fallback={LoadingSimple}>
        <RenderRoutes routes={ROUTES} />
      </Suspense>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
