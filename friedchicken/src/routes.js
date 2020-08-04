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
   {
      path:"/login",
      component: getComponent("./app/Modules/Login/components/Login")
   },
   {
      path:"/register",
      component: getComponent("./app/Modules/Register/components/Register")
   },
   {
      path:"/login/facebook",
      component: getComponent("./app/Modules/Login/components/LoginFacebook")
   },
   {
      path:"/login/google",
      component: getComponent("./app/Modules/Login/components/LoginGoogle")
   },
   {
      path:"/manager",
      component:getComponent("./app/Modules/Manager/components/Main")
   },
   {
      path:"/manager/managerproduct",
      component: getComponent("./app/Modules/Manager/components/ManagerProduct")
   },
   {
      path:"/managercustomer",
      component:getComponent("./app/Modules/ManagerCustomer/components/Main")
   },
   // {
   //    path:"/managercustomer/Manageruser",
   //    component:getComponent("./app/Modules/ManagerCustomer/components/ManagerCart")
   // },
   // {
   //    path:"/managercustomer/ManagerCart",
   //    component:getComponent("./app/Modules/ManagerCustomer/components/ManagerUser")
   // },
   { redirect: true, path: "/", to: '/home' }
];
