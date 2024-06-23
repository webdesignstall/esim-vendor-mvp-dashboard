import React from 'react';
import {Form, Input, Button, InputNumber, List, Card, Select} from 'antd';
import axios from "axios";
import toast from "react-hot-toast";

const { Item } = Form;

const ESimCatalogFrom = () => {
    const [form] = Form.useForm();

    const onFinish = async (values) => {
        try {
            const {data} = await axios.post(`/esim-catalogs`, values);
            toast.success(data?.message);

            form.resetFields()
        }catch (error) {
           if (error?.response?.status === 400){
               toast.error(error?.response?.data?.error)
           }else {
               toast.error('Something Went Wrong!')
           }

        }




    };

    return (
        <Form form={form} onFinish={onFinish} layout="vertical">

            <Card style={{marginBottom: '20px'}}>
                <Item label="Name" name="title">
                    <Input size={`large`} />
                </Item>
                <Item label="Price" name="price" >
                    <Input size={`large`} />
                </Item>

                <Item label="Company" name="company" >
                    <Input size={`large`} />
                </Item>
                <Item label="Coverage" name="coverage" >
                    <Input size={`large`} />
                </Item>
                <Item label="Country" name="country" >
                    <Input size={`large`} />
                </Item>
                <Item label="Available Numbers" name="availableNumbers" >
                    <Select size={'large'} mode={'tags'}/>
                </Item>
            </Card>

            <Item>
                <Button size={`large`} type="primary" htmlType="submit">Create</Button>
            </Item>
        </Form>
    );
};

export default ESimCatalogFrom;
