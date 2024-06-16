import React, {useState} from 'react';
import {Menu, Layout} from "antd";
import { NavLink} from "react-router-dom";
import {
    AntDesignOutlined,
    DashboardOutlined, FormOutlined, OrderedListOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

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

const SideMenuBar = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Sider theme='light' collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <Menu defaultSelectedKeys={window.location.pathname} items={items} mode="inline" className='mt-2'/>
        </Sider>
    );
};

export default SideMenuBar;