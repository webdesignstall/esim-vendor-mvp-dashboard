import React, {useEffect, useState} from 'react';
import {Col, Descriptions, Row, Space, Table, Tag} from 'antd';
import axios from "axios";

const VendorEsimList = () => {

    const [eSIMData, setESIMData] = useState([])
    const [loading, setLoading] = useState(false)

    const columns = [
        {
            title: 'IMSI',
            dataIndex: 'imsi',
            key: 'imsi',
        },
        {
            title: 'ICCID',
            dataIndex: 'iccid',
            key: 'iccid',
        },
        {
            title: 'Authentication Key',
            dataIndex: 'ki',
            key: 'ki',
        },
        {
            title: 'Vendor',
            dataIndex: 'vendorId',
            key: 'vendor',
            render: (_, data) => `${data?.vendorId?.firstName ? data?.vendorId?.firstName?.toUpperCase() : ''} ${data?.vendorId?.lastName ? data?.vendorId?.lastName?.toUpperCase() : 'N/A'}`
        }
    ];


    useEffect(() => {
        (async ()=> {
            setLoading(true)
            const {data} = await axios.get('/vendor-esim');
            setESIMData(data)
            setLoading(false)
        })()
    }, []);






    return (
        <Table
            columns={columns} dataSource={eSIMData} loading={loading} rowKey="imsi"

            expandable={{
                expandedRowRender: (record) => (
                    <>
                        <Row gutter={36}>
                            <Col span={12} style={{marginBottom: '20px', borderBottom: '1px solid gray'}}>
                                <p style={{fontSize: '1rem', fontWeight: 'bold'}}>Operator Specific Data</p>

                                <p style={{fontWeight: 'bold'}}>APN: <span style={{color: 'orange', fontSize: '1.1rem'}}> {record?.operatorSpecificData?.apn}</span></p>
                                <p style={{fontWeight: 'bold'}}>Network Selection Mode:  <span
                                    style={{color: 'orange', fontSize: '1.1rem'}}>  {record?.operatorSpecificData?.settings?.networkSelectionMode} </span>
                                </p>

                            </Col>
                            <Col span={12} style={{marginBottom: '20px', borderBottom: '1px solid gray'}}>
                                <p style={{fontSize: '1rem', fontWeight: 'bold'}}>Cryptographic Information</p>

                                <p  style={{fontWeight: 'bold'}}>Security Key:<span style={{color: 'orange', fontSize: '1.1rem'}}> {record?.cryptographicInformation?.securityKeys} </span></p>

                                <p style={{fontWeight: 'bold'}}> Certificate: <span style={{color: 'orange', fontSize: '1.1rem'}}> {record?.cryptographicInformation?.certificates} </span></p>

                            </Col>
                            <Col span={12}>
                                <p style={{fontSize: '1rem', fontWeight: 'bold'}}>Networks And Roaming Preferences</p>

                                <p>
                                    <span style={{fontWeight: 'bold'}}>Preferred Networks:</span>
                                    {
                                        record?.networksAndRoamingPreferences?.preferredNetworks?.map(item => (
                                            <span style={{color: 'orange', fontSize: '1.1rem'}}> { item },</span>
                                        ))
                                    }
                                </p>

                                <p><span style={{fontWeight: 'bold'}}>Roaming:</span> <span> <span style={{color: 'orange', fontSize: '1.1rem'}}> { record?.networksAndRoamingPreferences?.roaming } </span> </span>
                                </p>

                            </Col>
                            <Col span={12}>

                                <p style={{fontSize: '1rem', fontWeight: 'bold'}}>Subscription Information</p>

                                <p><span style={{fontWeight: 'bold'}}>Plan:</span> <span style={{color: 'orange', fontSize: '1.1rem'}}> { record?.subscriptionInformation?.plan } </span> </p>
                                <p><span style={{fontWeight: 'bold'}}>Data Allowance:</span> <span style={{color: 'orange', fontSize: '1.1rem'}}> { record?.subscriptionInformation?.dataAllowance } </span> </p>

                                <p><span style={{fontWeight: 'bold'}}>Voice Minutes:</span> <span style={{color: 'orange', fontSize: '1.1rem'}}> { record?.subscriptionInformation?.voiceMinutes } </span>  </p>
                                <p><span style={{fontWeight: 'bold'}}>sms:</span> <span style={{color: 'orange', fontSize: '1.1rem'}}> { record?.subscriptionInformation?.sms } </span>   </p>

                            </Col>
                        </Row>
                    </>
                ),
                rowExpandable: (record) => record.name !== 'Not Expandable',
            }}


        />
    );
};

export default VendorEsimList;
