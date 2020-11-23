import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

import ROUTES, { RenderRoutes } from '../../studentRoutes';
import LoadingSimple from '../../UI/LoadingSimple/LoadingSimple';
import NavBar from './NavBar/NavBar';
import './Layout.style.scss';

const Layout = ({ children }) => {
  return (
    <>
      <div className="Layout">
        <NavBar />
        <Suspense fallback={LoadingSimple}>
          <RenderRoutes routes={ROUTES} />
        </Suspense>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
