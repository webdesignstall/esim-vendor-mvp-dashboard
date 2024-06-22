import React from 'react';
import {Link, NavLink, Outlet} from "react-router-dom";
import {useCart} from "../../context/cart";
import {useAuth} from "../../context/AuthProvider";
import {sessionRemove} from "../../helpers/sessionHelper";
import {
    AntDesignOutlined, BorderOutlined,
    DashboardOutlined,
    FormOutlined, HomeOutlined,
    KeyOutlined, LogoutOutlined, OrderedListOutlined,
    UploadOutlined,
    UserOutlined
} from "@ant-design/icons";
import AppHeader from "../admin/AppHeader";
import {Breadcrumb, Layout} from "antd";
import SideMenuBar from "../admin/SideMenuBar";
import AppFooter from "../admin/AppFooter";
import {Content} from "antd/es/layout/layout";



const Main = () => {
    const [cart, setCart] =useCart();
    const {auth, token} = useAuth();
    // const [categories, setCategories] = useCategories();


    const logout = ()=>{
        sessionRemove();
    }

    const items = [
        {
            key: '1',
            label:  <NavLink to='/'>Home</NavLink>,
        },
        {
            key: '1',
            label:  <NavLink to='/vendor'>Dashboard</NavLink>,
        },

        {
            key: '2',
            label:  <NavLink to='/vendor/esim-catalog'>eSim Catalog</NavLink>,
        },
        {
            key: '3',
            label:  <NavLink to='/vendor/esim'>eSim</NavLink>,
        },
        {
            key: '4',
            label:  <NavLink to='/vendor/orders'>Orders</NavLink>,
        },
        {
            key: '5',
            label:  <a href='#' onClick={logout}>Log Out</a>
        },

    ]

    return (
        <>
            <Layout
                style={{
                    minHeight: '100vh',
                }}
            >
                <SideMenuBar items={items} />
                <Layout className="site-layout">
                    <AppHeader/>
                    <Content
                        style={{
                            margin: '0 16px',
                        }}

                    >
                        <Outlet />
                    </Content>
                    <AppFooter/>
                </Layout>
            </Layout>
        </>
    );
};

export default Main;