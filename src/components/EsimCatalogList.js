import React from 'react';
import {Table, Tag} from 'antd';


const EsimCatalogList = ( { catalogs, loading }) => {

    // const [eSIMData, setESIMData] = useState([])
    // const [loading, setLoading] = useState(false)

    const columns = [
        {
            title: 'Name',
            dataIndex: 'title',
            key: '1',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: '4',
        },
        {
            title: 'Company',
            dataIndex: 'company',
            key: '2',
        },
        {
            title: 'country',
            dataIndex: 'country',
            key: '3',
        },
        {
            title: 'Coverage',
            dataIndex: 'coverage',
            key: '5',
        },
        {
            title: 'Available Numbers',
            dataIndex: 'availableNumbers',
            key: '6',
            render: (text, record) => text?.map((item, index) => <Tag key={index}>{item}</Tag>)

        }
    ];






    return (
        <Table
            columns={columns} dataSource={catalogs} loading={loading}
        />
    );
};

export default EsimCatalogList;
