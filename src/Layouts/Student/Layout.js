import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

import ROUTES, { RenderRoutes } from '../../studentRoutes';
import LoadingSimple from '../../UI/LoadingSimple/LoadingSimple';

const Layout = ({ children }) => {
  return (
    <>
      Navigation for Student Routes
      <Suspense fallback={LoadingSimple}>
        <RenderRoutes routes={ROUTES} />
      </Suspense>
      Footer maybe
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
