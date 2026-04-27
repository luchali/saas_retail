import { createBrowserRouter } from "react-router";
import { Root } from "./Root";
import { LandingPage } from "../app/components/pages/LandingPage";
import { DashboardPage } from "../app/components/pages/DashboardPage";
import { StoreLandingPage } from "../app/components/pages/StoreLandingPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: LandingPage },
      { path: "dashboard", Component: DashboardPage },
      { path: "store", Component: StoreLandingPage },
    ],
  },
], {
  basename: "/saasretail",
});