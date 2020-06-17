import { lazy } from "react";

function getComponent(path) {
   return lazy(() => import(`${path}`));
}

export const defaultRoutes = [
   {
      default: true,
      path: "/",
      component: getComponent("./app/App/App")
   }
];

export const appRoutes = [
   {
      path: "/home",
      component: getComponent("./app/Modules/Home/components/Home")
   },
   {
      path: "/food",
      component: getComponent("./app/Modules/Food/components/Food")
   },
   {
      path: "/drink",
      component: getComponent("./app/Modules/Drink/components/Drink")
   },
   {
      path: "/store",
      component: getComponent("./app/Modules/Store/components/Store")
   },
   {
      path: "/introduce",
      component: getComponent("./app/Modules/HeadBar/components/Introduce")
   },
   { redirect: true, path: "/", to: '/home' }
];
