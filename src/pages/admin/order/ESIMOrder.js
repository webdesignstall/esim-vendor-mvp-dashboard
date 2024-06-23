import React from 'react';
import {Table, Tag} from "antd";
import {Link} from "react-router-dom";

const EsimCatalog = () => {

    const orders = [
        {
            customerId: {
                _id: '101',
                name: 'Ahmed Al-Farsi'
            },
            vendorId: {
                _id: 201,
                name: 'Zian Telecom'
            },
            transactionId: 10001,
            catalogId: {
                _id: 301,
                name: 'Basic Plan'
            },
            eSimId: 44500001,
            price: 30,
        },
        {
            customerId: {
                _id: '102',
                name: 'Fatima Al-Sheikh'
            },
            vendorId: {
                _id: 202,
                name: 'Zian Telecom'
            },
            transactionId: 10002,
            catalogId: {
                _id: 302,
                name: 'Premium Plan'
            },
            eSimId: 44500002,
            price: 50,
        },
        {
            customerId: {
                _id: '103',
                name: 'Hassan Bin Saeed'
            },
            vendorId: {
                _id: 203,
                name: 'Zian Telecom'
            },
            transactionId: 10003,
            catalogId: {
                _id: 303,
                name: 'Standard Plan'
            },
            eSimId: 44500003,
            price: 40,
        },
        {
            customerId: {
                _id: '104',
                name: 'Layla Al-Zahra'
            },
            vendorId: {
                _id: 204,
                name: 'Zian Telecom'
            },
            transactionId: 10004,
            catalogId: {
                _id: 304,
                name: 'Business Plan'
            },
            eSimId: 44500004,
            price: 60,
        },
        {
            customerId: {
                _id: '105',
                name: 'Omar Al-Masri'
            },
            vendorId: {
                _id: 205,
                name: 'Zian Telecom'
            },
            transactionId: 10005,
            catalogId: {
                _id: 305,
                name: 'Family Plan'
            },
            eSimId: 44500005,
            price: 70,
        }
    ];

    const columns = [
        {
            title: 'Transaction Id',
            dataIndex: 'transactionId',
            key: 'transactionId',
        },
        {
            title: 'eSim Id',
            dataIndex: 'eSimId',
            key: 'eSimId',
        },
        {
            title: 'Catalog',
            dataIndex: 'catalogId',
            key: 'catalogId',
            render: (catalog) => catalog?.name
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Customer',
            dataIndex: 'customerId',
            key: 'customerId',
            render: (customer) => <Link to={`/admin/order/customer-profile/${customer?._id}`}>{customer?.name}</Link>
        },
        {
            title: 'Vendor',
            dataIndex: 'vendorId',
            key: 'vendorId',
            render: (vendor) => <Link to={vendor?._id}>{vendor?.name}</Link>
        },


    ];


    return (
        <>
           <Table dataSource={orders} columns={columns}/>
        </>
    );
};

export default EsimCatalog;