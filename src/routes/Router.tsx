import React, { Suspense } from "react";
import { createBrowserRouter, RouteObject } from "react-router-dom";

import PageLoading from "../components/page-loading/PageLoading";
import { LayoutPage } from "../components/page";
import Page404 from "../pages/errors/Page404";
import BottomNavBar from "../components/BottomNavBar";
import Home from "../pages/Home";
import AgentPage from "../pages/Agent";
import Airdrop from "../pages/Airdrop";
import Earn from "../pages/Earn";
import Tmp3 from "../pages/Tmp3";
import Tmp4 from "../pages/Tmp4";
import Workforce from "../pages/Workforce";
import VacancyOpen from "../pages/VacancyOpen";
import NewVacancy from "../pages/NewVacancy";
import Prices from "../pages/Prices";
import Profile from "../pages/Profile";
import Jalopa from "../pages/Jalopa";
// import Chat from "../pages/Chat";

const getRouteElementPublic = (
  Component: React.ElementType
): React.ReactNode => {
  return (
    <Suspense fallback={<PageLoading />}>
      <LayoutPage>
        <Component />
        <BottomNavBar />
      </LayoutPage>
    </Suspense>
  );
};

const routes: RouteObject[] = [
  { path: "*", element: getRouteElementPublic(Page404) },
  { path: "/", element: getRouteElementPublic(Home) },
  { path: "/agents", element: getRouteElementPublic(AgentPage) },
  { path: "/earn", element: getRouteElementPublic(Earn) },
  { path: "/airdrop", element: getRouteElementPublic(Airdrop) },
  { path: "/settings", element: getRouteElementPublic(Tmp3) },
  { path: "/settings/languages", element: getRouteElementPublic(Tmp4) },
  { path: "/workforce", element: getRouteElementPublic(Workforce) },
  { path: "/vacancy_open", element: getRouteElementPublic(VacancyOpen) },
  { path: "/new_vacancy", element: getRouteElementPublic(NewVacancy) },
  { path: "/price", element: getRouteElementPublic(Prices) },
  { path: "/profile", element: getRouteElementPublic(Profile) },
  { path: "/jalopa", element: getRouteElementPublic(Jalopa) },
  // { path: "/chat", element: getRouteElementPublic(Chat) },
];

const Router = createBrowserRouter(routes);

export default Router;
