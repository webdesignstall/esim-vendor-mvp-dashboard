import React, {useEffect, useState} from 'react';
import {
    Button,
    Card,
    Col,
    Form,
    Input,
    Row
} from "antd";
import {useLocation} from "react-router-dom";
import {getSingleVendor, registerRequest} from "../../APIRequest/userApi";


const VendorCreateForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [form] = Form.useForm();
    const location = useLocation();
    const vendorId = location.state?.id;


    useEffect(()=>{
        document.title = 'Vendor Create';

        if (vendorId){
            getSingleVendor(vendorId).then(res => {

                form.setFieldsValue({
                    firstName: res?.vendor?.firstName,
                    lastName: res?.vendor?.lastName,
                    email: res?.vendor?.email,
                })
            })
        }
    }, [vendorId])



    const onFinish = () => {

        const values = form.getFieldsValue();
        setIsSubmitting(true)
        registerRequest(values, vendorId).then(res => {
            setIsSubmitting(false)
            if (res){
                // navigate('/dashboard/product-list')
                form.resetFields();
            }
        })

    };




    return (

            <Form

                form={form}
                name="basic"
                layout='vertical'
                onFinish={onFinish}
                autoComplete="off"
                encType='multipart/form-data'
            >
                <Row gutter={18}>
                    <Col span={18}>
                        <Card title='Vendor'>

                            <Row gutter={16}>
                                <Col span={12}>
                                    <Form.Item
                                        style={{ width: '100%' }}
                                        label="First Name"
                                        name="firstName"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'First Name is required!',
                                            },
                                        ]}
                                    >
                                        <Input size={'large'} style={{ width: '100%' }} />
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item
                                        style={{ width: '100%' }}
                                        label="Last Name"
                                        name="lastName"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Last Name is required!',
                                            },
                                        ]}
                                    >
                                        <Input size={'large'} style={{ width: '100%' }} />
                                    </Form.Item>
                                </Col>
                            </Row>



                            <Form.Item
                                style={{ width: '100%' }}
                                label="Email"
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Email is required!',
                                    },
                                ]}
                            >
                                <Input size={'large'} />
                            </Form.Item>

                            <Form.Item
                                style={{ width: '100%' }}
                                label="Password"
                                name="password"
                                rules={[
                                    {
                                        required: !vendorId,
                                        message: 'Password is required!',
                                    },
                                ]}
                            >
                                <Input.Password size={'large'} />
                            </Form.Item>

                            {
                                !vendorId && <Form.Item
                                    style={{ width: '100%' }}
                                    label="Confirm Password"
                                    name="confirmPassword"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Confirm Password is required!',
                                        },
                                    ]}
                                >
                                    <Input.Password size={'large'} />
                                </Form.Item>
                            }



                            <Form.Item
                            >
                                <Button type="primary" size='large' htmlType="submit" loading={isSubmitting} className='my-4'>
                                    {vendorId ? 'Update' : 'Register'}
                                </Button>
                            </Form.Item>

                        </Card>
                    </Col>
                </Row>

            </Form>
    );
};

export default VendorCreateForm;
