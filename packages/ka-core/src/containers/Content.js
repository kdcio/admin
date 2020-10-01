import React, { Suspense, useState, useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { CContainer, CFade } from '@coreui/react';
import { RouteContextProvider } from '../context';

// import routes from '../routes';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

const createRoute = ({ name, idx, path, exact, component: Component }) => (
  <Route
    key={`${name}-${idx}`}
    path={path}
    exact={exact}
    name={name}
    render={(props) => (
      <CFade>
        <RouteContextProvider name={name} {...props}>
          <Component {...props} name={name} />
        </RouteContextProvider>
      </CFade>
    )}
  />
);

const createResourceRoutes = ({ props }) => {
  const { name, list, edit, create, show } = props;
  const routes = [];
  if (list) {
    routes.push(
      createRoute({
        name,
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

export default React.memo(Content);
