import React from 'react';
import styles from './Auth.module.scss';
import { Button, Form, Input } from 'antd';

const LoginForm = () => {
    const onSubmit = (values) => {
        console.log(values);
    };
    return (
        <div className={styles.formBlock}>
            <Form onFinish={onSubmit} name="basic" labelCol={{ span: 8 }}>
                <Form.Item
                    label="E-Mail"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default LoginForm;
