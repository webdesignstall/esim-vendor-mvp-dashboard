import {createBrowserRouter} from "react-router-dom";
import AdminMain from "../layouts/admin/AdminMain";
import DashboardPage from "../pages/dashboard/Dashboard-page";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/auth/LoginPage";
import Main from "../layouts/customer/Main";
import ForgotPasswordPage from "../pages/auth/ForgotPasswordPage";
import VerifyOtpPage from "../pages/auth/VerifyOtpPage";
import NewPasswordPage from "../pages/auth/NewPasswordPage";
import PrivateRoute from "./privateRoute";
import VendorCreatePage from "../pages/admin/vendor/VendorCreatePage";
import VendorListPage from "../pages/admin/vendor/VendorListPage";
import ProfilePage from "../pages/auth/ProfilePage";
import UpdatePasswordPage from "../pages/auth/UpdatePasswordPage";
import SuperAdminRoute from "./superAdminRoute";
import UserDashboardPage from "../pages/dashboard/UserDashboard-page";
import VendorEsimList from "../components/vendor/VendorEsimList";
import UserMain from "../layouts/UserMain";
import ESIMCatalog from "../pages/dashboard/ESIMCatalog";
import ESIM from "../pages/dashboard/ESIM";
import ESIMOrder from "../pages/dashboard/ESIMOrder";

const router = createBrowserRouter([

    {
        path: '/admin',
        element:<SuperAdminRoute><AdminMain/></SuperAdminRoute>,
        children: [
            {
                index: true,
                element: <DashboardPage/>
            },
            {
                path: '/admin/vendor-create',
                element: <VendorCreatePage/>
            },
            {
                path: '/admin/vendor-list',
                element: <VendorListPage/>
            },
            {
                path: '/admin/vendor-esim-list',
                element: <VendorEsimList/>
            },
            {
                path: '/admin/profile',
                element: <ProfilePage/>
            },
            {
                path: '/admin/change-password',
                element: <UpdatePasswordPage/>
            },
        ]
    },
    {
        path: '/',
        element: <UserMain/>,
        children: [
            {
                path: '/',
                element: <HomePage/>
            },
            {
                path: '/login',
                element: <LoginPage/>
            },
            {
                path: '/send-otp',
                element: <ForgotPasswordPage/>
            },
            {
                path: '/verify-otp',
                element: <VerifyOtpPage/>
            },
            {
                path: '/reset-password',
                element: <NewPasswordPage/>
            },

        ]
    },

    {
        path: '/vendor',
        element: <PrivateRoute><Main/></PrivateRoute> ,
        children: [
            {
                index: true,
                element: <UserDashboardPage/>
            },
            {
                path: '/vendor/esim-catalog',
                element: <ESIMCatalog/>
            },
            {
                path: '/vendor/esim',
                element: <ESIM/>
            },
            {
                path: '/vendor/orders',
                element: <ESIMOrder/>
            },
            {
                path: '/vendor/profile',
                element: <ProfilePage/>
            },
            {
                path: '/vendor/change-password',
                element: <UpdatePasswordPage/>
            }
        ]
    },
]);

export default router;