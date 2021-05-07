/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { ROUTES } from "./utils/routes";
import { Loader } from "./components/general/loader";

const AppRoutes: React.FC = () => {
  const loading = false;
  React.useEffect(() => {
    //todo: getPilots
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Switch>
      {ROUTES.map(({ path, component }, index) => (
        <Route path={path} component={component} key={index} exact />
      ))}
    </Switch>
  );
};

export default AppRoutes;
