import React, {useEffect, useState} from 'react';
import {Tabs} from "antd";
import axios from "axios";
import EsimCatalogList from "../../components/EsimCatalogList";
import ESimCatalogFrom from "../../components/ESimCatalogFrom";

const EsimCatalog = () => {

    const [catalogs, setCatalogs] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        (async () => {
            getCatalogs()
        })()
    }, []);


    const getCatalogs = async ()=> {
        setLoading(true)
        const {data} = await axios.get('/esim-catalogs');

        setCatalogs(data)
        setLoading(false)
    }


    const items = [
        {
            key: '1',
            label: 'List',
            children: (

                <EsimCatalogList catalogs={catalogs} loading={loading}/>

            ) ,
        },
        {
            key: '2',
            label: 'Create New',
            children: (

                <ESimCatalogFrom/>

            ),
        }

    ];


    const handleOnchange = ()=> {
        getCatalogs()
    }


    return (
        <>
            <Tabs defaultActiveKey="1" items={items} onChange={handleOnchange} />
        </>
    );
};

export default EsimCatalog;