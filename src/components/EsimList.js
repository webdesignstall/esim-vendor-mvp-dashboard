import React, {useEffect, useState} from 'react';
import {Col, Descriptions, Row, Space, Table, Tag} from 'antd';
import axios from "axios";

const EsimList = ( { eSIMData, loading }) => {

    // const [eSIMData, setESIMData] = useState([])
    // const [loading, setLoading] = useState(false)

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
        }
    ];






    return (
        <Table
            columns={columns} dataSource={eSIMData} loading={loading} rowKey="imsi"

            expandable={{
                expandedRowRender: (record) => (
                    <>
                        <Row gutter={36}>
                            <Col span={12} style={{marginBottom: '20px', borderBottom: '1px solid gray'}}>
                                <p style={{fontSize: '1rem', fontWeight: 'bold'}}>Operator Specific Data</p>

                                    <p><span style={{fontWeight: 'bold'}}>APN:</span> {record?.operatorSpecificData?.apn}</p>
                                    <p><span style={{fontWeight: 'bold'}}>MNC:</span> {record?.operatorSpecificData?.mnc}</p>

                            </Col>
                            <Col span={12} style={{marginBottom: '20px', borderBottom: '1px solid gray'}}>
                                <p style={{fontSize: '1rem', fontWeight: 'bold'}}>Cryptographic Information</p>

                                    <p><span style={{fontWeight: 'bold'}}>Public Key:</span> {record?.cryptographicInformation?.publicKey}</p>
                                    <p><span style={{fontWeight: 'bold'}}>Private Key:</span> {record?.cryptographicInformation?.privateKey}</p>

                            </Col>
                            <Col span={12}>
                                <p style={{fontSize: '1rem', fontWeight: 'bold'}}>Networks And Roaming Preferences</p>

                                <p>
                                    <span style={{fontWeight: 'bold'}}>Preferred Networks:</span>
                                    {
                                        record?.networksAndRoamingPreferences?.preferredNetworks?.map(item => (
                                            <p>{ item }</p>
                                        ))
                                    }
                                </p>
                                <p><span style={{fontWeight: 'bold'}}>Roaming Setting Roaming Allowed:</span> <p> { record?.networksAndRoamingPreferences?.roamingSettings?.roamingAllowed } </p>
                                </p>

                                <p><span style={{fontWeight: 'bold'}}>Roaming Setting Roaming Cost:</span> <p> { record?.networksAndRoamingPreferences?.roamingSettings?.roamingCost } </p>
                                </p>

                            </Col>
                            <Col span={12}>
                                <p style={{fontSize: '1rem', fontWeight: 'bold'}}>Subscription Information</p>

                                <p><span style={{fontWeight: 'bold'}}>Data Allowances:</span> <p> { record?.subscriptionInformation?.dataAllowances } </p>
                                </p>

                                <p><span style={{fontWeight: 'bold'}}>Voice Minute Quotas:</span> <p> { record?.subscriptionInformation?.voiceMinuteQuotas } </p>
                                </p>

                            </Col>
                        </Row>
                    </>
                ),
                rowExpandable: (record) => record.name !== 'Not Expandable',
            }}


        />
    );
};

export default EsimList;
