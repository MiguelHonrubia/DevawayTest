/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { ROUTES } from "./utils/routes";
import { Loader } from "./components/general/loader";
import { usePilotContext } from "./contexts/pilot";

const AppRoutes: React.FC = () => {
  const { initialFetch, loading } = usePilotContext();
  React.useEffect(() => {
    initialFetch();
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
