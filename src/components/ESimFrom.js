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
                    <Input size={`large`} />
                </Item>

                <Item label="ICCID" name="iccid" >
                    <Input size={`large`} />
                </Item>
            </Card>


           <Card style={{marginBottom: '20px'}} title={`Operator-Specific Data`}>
               <Item label="APN" name={['operatorSpecificData', 'apn']} >
                   <Input size={`large`} />
               </Item>
               <Item label="Network Selection Mode" name={['operatorSpecificData', 'settings', 'networkSelectionMode']} >
                   <Input size={`large`} />
               </Item>

               <Item label="Preferred Network" name={['operatorSpecificData', 'settings', 'preferredNetwork']} >
                   <Input size={`large`} />
               </Item>
           </Card>

            <Card style={{marginBottom: '20px'}} title={`Cryptographic Information`}>
                <Item label="Security Key" name={['cryptographicInformation', 'securityKeys']} >
                    <Input size={`large`} />
                </Item>
                <Item label="Certificate" name={['cryptographicInformation', 'certificates']} >
                    <Input size={`large`} />
                </Item>
            </Card>

            <Card style={{marginBottom: '20px'}} title={`Subscription Information`}>
                <Item label="Plan" name={['subscriptionInformation', 'plan']} >
                    <Input size={`large`} />
                </Item>
                <Item label="Data Allowance (MB)" name={['subscriptionInformation', 'dataAllowance']} >
                    <Input size={`large`} />
                </Item>
                <Item label="Voice Minute" name={['subscriptionInformation', 'voiceMinutes']} >
                    <Input size={`large`} />
                </Item>
                <Item label="SMS" name={['subscriptionInformation', 'sms']} >
                    <Input size={`large`} />
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

                <Item label="Roaming" name={['networksAndRoamingPreferences', 'roaming']} >
                    <Input size={`large`} />
                </Item>

            </Card>
            <Item>
                <Button size={`large`} type="primary" htmlType="submit">Submit</Button>
            </Item>
        </Form>
    );
};

export default ESIMForm;
