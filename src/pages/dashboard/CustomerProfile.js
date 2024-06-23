import React from 'react';
import { Card, Button, Descriptions, Typography } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import {useParams} from "react-router-dom";

const { Title } = Typography;

const CustomerProfile = () => {

    const {customerId} = useParams();

    const customers = [
        {
            _id: '101',
            name: 'Ahmed Al-Farsi',
            email: 'ahmed.alfarsi@example.com',
            phone: '+971501234567',
            address: '1234 Al-Falah St, Abu Dhabi, UAE',
            kyc: 'https://esim-customer-kyc.s3.amazonaws.com/kyc1.pdf',
        },
        {
            _id: '102',
            name: 'Fatima Al-Sheikh',
            email: 'fatima.alsheikh@example.com',
            phone: '+971502345678',
            address: '5678 Corniche Rd, Dubai, UAE',
            kyc: 'https://esim-customer-kyc.s3.amazonaws.com/kyc2.pdf'
        },
        {
            _id: '103',
            name: 'Hassan Bin Saeed',
            email: 'hassan.binsaeed@example.com',
            phone: '+971503456789',
            address: '9101 Sheikh Zayed Rd, Sharjah, UAE',
            kyc: 'https://esim-customer-kyc.s3.amazonaws.com/kyc3.pdf'
        },
        {
            _id: '104',
            name: 'Layla Al-Zahra',
            email: 'layla.alzahra@example.com',
            phone: '+971504567890',
            address: '1122 Khalifa St, Al Ain, UAE',
            kyc: 'https://esim-customer-kyc.s3.amazonaws.com/kyc3.pdf'
        },
        {
            _id: '105',
            name: 'Omar Al-Masri',
            email: 'omar.almasri@example.com',
            phone: '+971505678901',
            address: '1314 Yas Island, Abu Dhabi, UAE',
            kyc: 'https://esim-customer-kyc.s3.amazonaws.com/kyc3.pdf'
        }
    ];

    const handleDownloadKYC = () => {
        // Placeholder for download function
        console.log(`Downloading KYC for ${customer.customerId.name}`);
        // Implement actual download logic here
    };


    const customer = customers?.find(customer => customer?._id == customerId);


    // Example usage
   /* const customer = {
        _id: '101',
        name: 'Ahmed Al-Farsi',
        email: 'ahmed.alfarsi@example.com',
        phone: '+971501234567',
        address: '1234 Al-Falah St, Abu Dhabi, UAE',
    };*/

    return (
        <Card
            style={{ width: 400, margin: 'auto', marginTop: '20px' }}
            cover={
                <img
                    alt="example"
                    src="https://via.placeholder.com/400x200" // Placeholder image URL
                />
            }
            actions={[
                <a href={customer?.kyc} download={customer?.kyc}>
                    <Button type="primary" icon={<DownloadOutlined />} download={customer?.kyc}>
                        Download KYC
                    </Button>
                </a>

            ]}
        >
            <Title level={4}>Customer Profile</Title>
            <Descriptions column={1}>
                <Descriptions.Item label="Name">{customer.name}</Descriptions.Item>
                <Descriptions.Item label="Customer ID">{customer._id}</Descriptions.Item>
                <Descriptions.Item label="Email">{customer.email}</Descriptions.Item>
                <Descriptions.Item label="Phone Number">{customer.phone}</Descriptions.Item>
                <Descriptions.Item label="Address">{customer.address}</Descriptions.Item>
            </Descriptions>
        </Card>
    );
};

export default CustomerProfile;
