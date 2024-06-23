import React, {useEffect, useState} from 'react';
import {Card, Col, Row} from "antd";
import axios from "axios";
import {Link} from "react-router-dom";


const HomePage = () => {

    const [eSimCatalogs, setEsimCatalogs] = useState([])

    useEffect(() => {
        (async ()=> {
            const {data} = await axios.get('/catalogs');

            setEsimCatalogs(data);

        })()
    }, []);


    return (
        <div className="container py-5">
            <Row gutter={[32, 32]} className='d-flex justify-content-center'>

                {
                    eSimCatalogs?.map((esimCatalog) => (
                        <Col span={8}>
                            <Card className='d-flex justify-content-center flex-wrap'>
                                <div className='text-center'>
                                    <div className="sim-icon text-center">
                                        <svg width="49" height="64" viewBox="0 0 49 64" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M29.1067 5.72493C28.8553 5.47493 28.5158 5.33743 28.1637 5.33743H5.36871C2.40146 5.33743 0 7.72493 0 10.6624V58.6624C0 61.6124 2.40146 63.9999 5.36871 63.9999H37.5558C40.5105 63.9999 42.9246 61.6124 42.9246 58.6624V19.9999C42.9246 19.6499 42.7863 19.3124 42.5348 19.0624L29.1067 5.72493ZM40.2339 58.6624C40.2339 60.1374 39.0269 61.3249 37.5558 61.3249H5.36871C3.88509 61.3249 2.69064 60.1249 2.69064 58.6624V10.6624C2.69064 9.18743 3.89766 7.99993 5.36871 7.99993H27.6105L40.2339 20.5499V58.6624Z"
                                                fill="#19AAF8"></path>
                                            <path
                                                d="M8.04688 30.6626V52.0001C8.04688 54.2001 9.8574 56.0001 12.0703 56.0001H30.8419C33.0548 56.0001 34.8653 54.2001 34.8653 52.0001V30.6626C34.8653 28.4626 33.0548 26.6626 30.8419 26.6626H12.0703C9.8574 26.6626 8.04688 28.4626 8.04688 30.6626ZM16.0937 53.3376H12.0703C11.3285 53.3376 10.7249 52.7376 10.7249 52.0001V48.0001H16.0937V53.3376ZM24.1404 53.3376H18.7717V48.0001H24.1404V53.3376ZM32.1872 52.0001C32.1872 52.7376 31.5837 53.3376 30.8419 53.3376H26.8185V46.6751C26.8185 45.9376 26.215 45.3376 25.4732 45.3376H10.7249V37.3376H32.1872V52.0001ZM26.8185 29.3376H30.8419C31.5837 29.3376 32.1872 29.9376 32.1872 30.6751V34.6751H26.8185V29.3376ZM18.7717 29.3376H24.1404V34.6751H18.7717V29.3376ZM16.0937 34.6626H10.7249V30.6626C10.7249 29.9251 11.3285 29.3251 12.0703 29.3251H16.0937V34.6626Z"
                                                fill="#19AAF8"></path>
                                            <path
                                                d="M47.891 13.725L34.4755 0.3875C34.2241 0.1375 33.8846 0 33.5325 0H9.3922C8.65038 0 8.04688 0.6 8.04688 1.3375C8.04688 2.075 8.65038 2.675 9.3922 2.675H32.9668L45.6027 15.225V54.625C45.6027 55.3625 46.2062 55.9625 46.948 55.9625C47.6899 55.9625 48.2808 55.3625 48.2808 54.625V14.6625C48.2808 14.3125 48.1425 13.975 47.891 13.725Z"
                                                fill="#19AAF8"></path>
                                        </svg>
                                    </div>
                                    <h3 className={'mt-3'}>{esimCatalog?.title}</h3>
                                    <h5 className='fw-bold mt-3'>$ {esimCatalog?.price}</h5>
                                    <h5 className='fw-bold mt-3'>Company: {esimCatalog?.company}</h5>
                                    <h5 className='fw-bold mt-3'>Coverage: { esimCatalog?.coverage }</h5>
                                    <h5 className='fw-bold mt-3'>Country: {esimCatalog?.country}</h5>
                                    <Link to={`/online-order/${esimCatalog?._id}`}>
                                        <button className='btn btn-outline-info mt-3'>Online Order</button>
                                    </Link>

                                </div>
                            </Card>
                        </Col>
                    ))
                }

            </Row>
        </div>
    );
};

export default HomePage;