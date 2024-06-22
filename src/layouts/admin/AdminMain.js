import React from 'react';

import { Breadcrumb, Layout, Menu, theme } from 'antd';
import {NavLink, Outlet} from "react-router-dom";
import SideMenuBar from "./SideMenuBar";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";
import {AntDesignOutlined, DashboardOutlined, FormOutlined, OrderedListOutlined} from "@ant-design/icons";
const {Content, Footer } = Layout;



const AdminMain = () => {

    const {
        token: { colorBgContainer },
    } = theme.useToken();

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

export default AdminMain;