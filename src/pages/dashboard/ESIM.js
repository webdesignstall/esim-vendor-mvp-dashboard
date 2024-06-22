import React, {useEffect, useState} from 'react';
import axios from "axios";
import EsimList from "../../components/EsimList";
import ESIMForm from "../../components/ESimFrom";
import {Tabs} from "antd";

const EsimCatalog = () => {

    const [eSIMData, setESIMData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        (async () => {
            getEsim()
        })()
    }, []);


    const getEsim = async ()=> {
        setLoading(true)
        const {data} = await axios.get('/esim');
        setESIMData(data)
        setLoading(false)
    }


    const items = [
        {
            key: '1',
            label: 'List',
            children: (

                <EsimList eSIMData={eSIMData} loading={loading}/>

            ) ,
        },
        {
            key: '2',
            label: 'Create New',
            children: (

                <ESIMForm/>

            ),
        }

    ];


    const handleOnchange = ()=> {
        getEsim()
    }

    return (
        <>
            <Tabs defaultActiveKey="1" items={items} onChange={handleOnchange} />
        </>
    );
};

export default EsimCatalog;