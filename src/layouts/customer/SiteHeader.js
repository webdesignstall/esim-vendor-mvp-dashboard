import React from 'react';
import {Badge, Carousel, Col, Dropdown, Row, Space} from "antd";
import {Link, NavLink, useLocation} from "react-router-dom";
import {
    DashboardOutlined,
    DownOutlined,
    KeyOutlined,
    ShoppingCartOutlined,
    UploadOutlined,
    UserOutlined
} from "@ant-design/icons";
import Search from "../../components/Search";
import {useCart} from "../../context/cart";
import {useAuth} from "../../context/AuthProvider";
import {sessionRemove} from "../../helpers/sessionHelper";
import CategoriesMenu from "./CategoriesMenu";

const SiteHeader = () => {

    const [cart, setCart] =useCart();
    const {auth, token} = useAuth();
    // const [categories, setCategories] = useCategories();
    const location = useLocation();

    const logout = ()=>{
        sessionRemove();
    }

    const items = [
        {
            key: '5',
            label: (
                <>
                    {
                        auth.role === 'superadmin' ? <Link to='/admin'>
                            Admin Panel
                        </Link>
                            : <Link to='/vendor'>
                                Dashboard
                            </Link>
                    }
                </>

            ),
            // eslint-disable-next-line react/jsx-no-undef
            icon: <DashboardOutlined />
        },
        {
            key: '1',
            label: (
                <Link to='/customer/profile'>
                    Profile
                </Link>
            ),
            icon: <UserOutlined />
        },
        {
            key: '3',
            label: (
                <Link to='/customer/change-password'>
                    Change Password
                </Link>
            ),
            icon: <KeyOutlined rotate={-130} />
        },
        {
            key: '4',
            label: (
                <a href='/' onClick={logout} >
                    Log Out
                </a>
            ),
            icon: <UploadOutlined rotate={90} />
        }
    ];
    const contentStyle = {
        height: '425px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };
    return (
        <>
            <div className='container py-4'>
                <Row gutter={16}>
                    <Col className="gutter-row" span={6}>
                        <div >
                            <Link to='/'>Site Logo</Link>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <div >

                        </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div >
                            <nav className="navbar navbar-expand-lg">
                                <div className="container">


                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                                        <ul className="navbar-nav">

                                            {
                                                token ? <>
                                                    <li className="nav-item">

                                                        <Dropdown
                                                            menu={{
                                                                items,
                                                            }}
                                                            className="nav-link"
                                                        >
                                                            <a onClick={(e) => e.preventDefault()}>
                                                                <Space>
                                                                    <UserOutlined />
                                                                    Account
                                                                    <DownOutlined />
                                                                </Space>
                                                            </a>
                                                        </Dropdown>
                                                    </li>


                                                </> : <>
                                                    <li className="nav-item">
                                                        <NavLink className="nav-link" aria-current="page" to="/login">Login</NavLink>
                                                    </li>
                                                </>
                                            }

                                        </ul>

                                    </div>
                                </div>
                            </nav>
                        </div>
                    </Col>
                </Row>

            </div>
        </>

    );
};

export default SiteHeader;