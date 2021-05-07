import * as React from "react";
import { RouteProps } from "react-router-dom";

import Home from "../pages/home";
import Profile from "../pages/pilot/profile";

export const ROUTES: RouteProps[] = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/pilot/:id",
    component: Profile,
  },
];
