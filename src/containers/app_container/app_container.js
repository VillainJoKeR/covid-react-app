import React from 'react';
import { CoreLayout } from '../../layouts/core_layout/core_layout';
import logo from '../../logo.svg';
import ROUTES, { RenderRoutes } from "../../routes";
import './app_container.css';

function AppContainer() {
  return (
    <React.Fragment>
      <CoreLayout>
        <div>
          <RenderRoutes routes={ROUTES} />
        </div>
      </CoreLayout>
    </React.Fragment>
  );
}

export default AppContainer;
