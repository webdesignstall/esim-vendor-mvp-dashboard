import React from 'react';
import {Layout} from "antd";
import {Outlet} from "react-router-dom";
import {Content} from "antd/es/layout/layout";
import SiteHeader from "./customer/SiteHeader";

const UserMain = () => {
    return (
        <>
            <Layout
                style={{
                    minHeight: '100vh',
                }}
            >
                <Layout className="site-layout">
                    <SiteHeader/>
                    <Content
                        style={{
                            margin: '0 16px',
                        }}

                    >
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </>
    );
};

export default UserMain;