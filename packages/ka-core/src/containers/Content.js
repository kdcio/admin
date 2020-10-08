import React, { Suspense, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route, Switch } from 'react-router-dom';
import { CContainer, CFade } from '@coreui/react';
import { RouteContextProvider } from '../context';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse" />
  </div>
);

const createRoute = ({
  name,
  options,
  idx,
  path,
  exact,
  component: Component,
}) => (
  <Route
    key={`${name}-${idx}`}
    path={path}
    exact={exact}
    name={name}
    render={(props) => {
      const { history, location, match } = props;
      return (
        <CFade>
          <RouteContextProvider
            name={name}
            options={options}
            history={history}
            location={location}
            match={match}
          >
            <Component
              history={history}
              location={location}
              match={match}
              name={name}
            />
          </RouteContextProvider>
        </CFade>
      );
    }}
  />
);

const createResourceRoutes = ({ props }) => {
  const { name, options, list, edit, create, show } = props;
  const routes = [];
  if (list) {
    routes.push(
      createRoute({
        name,
        options,
        idx: 'list',
        path: `/${name}`,
        exact: true,
        component: list,
      })
    );
  }
  if (create) {
    routes.push(
      createRoute({
        name,
        options,
        idx: 'create',
        path: `/${name}/create`,
        exact: true,
        component: create,
      })
    );
  }
  if (edit) {
    routes.push(
      createRoute({
        name,
        options,
        idx: 'edit',
        path: `/${name}/:id`,
        exact: true,
        component: edit,
      })
    );
  }
  if (show) {
    routes.push(
      createRoute({
        name,
        options,
        idx: 'show',
        path: `/${name}/:id/show`,
        exact: true,
        component: show,
      })
    );
  }
  return routes;
};

const Content = ({ dashboard, children }) => {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    let ro = [];
    children.forEach((res) => {
      ro = ro.concat(createResourceRoutes(res));
    });
    if (dashboard) {
      ro = ro.concat(
        createRoute({
          name: 'dashboard',
          idx: 'dashboard',
          path: `/dashboard`,
          exact: true,
          component: dashboard,
        })
      );
      ro = ro.concat(
        <Redirect key="dashboard-redirect" from="/" to="/dashboard" />
      );
    }
    setRoutes(ro);
  }, [children]);

  return (
    <main className="c-main">
      <CContainer fluid>
        <Suspense fallback={loading}>
          <Switch>{routes}</Switch>
        </Suspense>
      </CContainer>
    </main>
  );
};

Content.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  dashboard: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default React.memo(Content);
