import React from 'react';
import {Form, Input, Button, InputNumber, List, Card, Select} from 'antd';
import axios from "axios";
import toast from "react-hot-toast";

const { Item } = Form;

const ESIMForm = () => {
    const [form] = Form.useForm();

    const onFinish = async (values) => {
        try {
            const {data} = await axios.post(`/esim`, values);
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

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    return (
        <Form form={form} onFinish={onFinish} layout="vertical">

            <Card style={{marginBottom: '20px'}}>
                <Item label="IMSI" name="imsi">
                    <Input size={`large`} />
                </Item>
                <Item label="Authentication Key (Ki)" name="ki" >
                    <Input.Password size={`large`} />
                </Item>

                <Item label="ICCID" name="iccid" >
                    <Input size={`large`} />
                </Item>
            </Card>


           <Card style={{marginBottom: '20px'}} title={`Operator-Specific Data`}>
               <Item label="APN" name={['operatorSpecificData', 'apn']} >
                   <Input size={`large`} />
               </Item>
               <Item label="MNC" name={['operatorSpecificData', 'mnc']} >
                   <Input size={`large`} />
               </Item>
           </Card>

            <Card style={{marginBottom: '20px'}} title={`Cryptographic Information`}>
                <Item label="Public Key" name={['cryptographicInformation', 'publicKey']} >
                    <Input size={`large`} />
                </Item>
                <Item label="Private Key" name={['cryptographicInformation', 'privateKey']} >
                    <Input.Password size={`large`} />
                </Item>
            </Card>

            <Card style={{marginBottom: '20px'}} title={`Subscription Information`}>
                <Item label="Data Allowances (MB)" name={['subscriptionInformation', 'dataAllowances']} >
                    <InputNumber size={`large`} min={0} />
                </Item>
                <Item label="Voice Minute Quotas" name={['subscriptionInformation', 'voiceMinuteQuotas']} >
                    <InputNumber size={`large`} min={0} />
                </Item>
            </Card>



            <Card style={{marginBottom: '20px'}} title={`Networks and Roaming Preferences`}>
                <Item label="Preferred Networks" name={['networksAndRoamingPreferences', 'preferredNetworks']} >
                    <Select size={`large`}
                        mode="tags"
                        style={{
                            width: '100%',
                        }}
                        onChange={handleChange}
                    />
                </Item>

                <Item label="Roaming Allowed" name={['networksAndRoamingPreferences', 'roamingSettings', 'roamingAllowed']} >
                    <Input size={`large`} />
                </Item>
                <Item label="Roaming Cost" name={['networksAndRoamingPreferences', 'roamingSettings', 'roamingCost']}>
                    <InputNumber size={`large`} min={0} />
                </Item>

            </Card>
            <Item>
                <Button size={`large`} type="primary" htmlType="submit">Submit</Button>
            </Item>
        </Form>
    );
};

export default ESIMForm;
