import React, {useState} from 'react';
import {Menu, Layout} from "antd";
import { NavLink} from "react-router-dom";
import {
    AntDesignOutlined,
    DashboardOutlined, FormOutlined, OrderedListOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;



const SideMenuBar = ({items}) => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Sider theme='light' collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <Menu defaultSelectedKeys={window.location.pathname} items={items} mode="inline" className='mt-2'/>
        </Sider>
    );
};

export default SideMenuBar;