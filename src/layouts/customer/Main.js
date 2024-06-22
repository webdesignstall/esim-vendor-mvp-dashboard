import React from 'react';
import {Link, NavLink, Outlet} from "react-router-dom";
import {useCart} from "../../context/cart";
import {useAuth} from "../../context/AuthProvider";
import {sessionRemove} from "../../helpers/sessionHelper";
import {
    AntDesignOutlined,
    DashboardOutlined,
    FormOutlined,
    KeyOutlined, OrderedListOutlined,
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
            key: 'admin',
            label:  <NavLink to='/admin'>Dashboard</NavLink>,
            icon: <DashboardOutlined />
        },
        {
            key: 'vendor',
            label:  'Vendor',
            icon: <AntDesignOutlined />,
            children: [
                {
                    key: '/admin/vendor-create',
                    label:  <NavLink to='/admin/vendor-create'>Create</NavLink>,
                    icon: <FormOutlined />,
                },
                {
                    key: '/admin/vendor-list',
                    label:  <NavLink to='/admin/vendor-list'>List</NavLink>,
                    icon: <OrderedListOutlined />,
                },
                {
                    key: '/admin/vendor-esim-list',
                    label:  <NavLink to='/admin/vendor-esim-list'>eSIM List</NavLink>,
                    icon: <OrderedListOutlined />,
                }
            ]
        }
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