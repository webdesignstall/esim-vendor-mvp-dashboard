import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {Card, Radio} from "antd";

const Checkout = () => {

    const {id} = useParams();

    const [catalog, setCatalog] = useState({})

    useEffect(() => {
        (async ()=> {
            const {data} = await axios.get(`/catalog/${id}`);

            setCatalog(data)

        })()
    }, [id]);

    return (
        <div className='container'>
            <div className="d-flex justify-content-center">

                <div className='text-center'>
                    <p>You are ordering</p>
                    <h3 className='text-center'>{catalog?.title}</h3>
                    <div className='border-1 p-5' style={{border: '1px solid gray'}}>
                        <p>Select Number</p>
                        <Radio.Group options={catalog?.availableNumbers} size={'large'} style={{display: 'block'}} />

                        <button className='mt-5 btn btn-primary w-100'>Add to cart</button>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Checkout;