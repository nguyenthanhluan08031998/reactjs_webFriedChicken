import { lazy } from "react";
function getComponent(path) {
    return lazy(() => import(`${path}`));
}

export const defaultRoutes = [
    {
        default: true,
        path: "/",
        component: getComponent("./components/Main")
    }
];

export const appRoutes = [
    {
        path: "/managercustomer/manageruser",
        component: getComponent("./components/ManagerUser/ManagerUser")
     },
    // {    
    //     path: "/managercustomer",
    //     component: getComponent("./components/Main")
    // },
    // {
    //     path: "/managercustomer/managercustomer",
    //     component: getComponent("./app/Modules/ManagerCustomer/components/ManagerUser/ManagerUser")
    // },
    { redirect: true, path: "/managercustomer/manageruser", to: '/managercustomer/manageruser' }
];
