import React from 'react';
import styles from './Auth.module.scss';
import { Button, Form, Input, notification } from 'antd';
import { RegisterFormDTO } from '@/api/dto/auth.dto';

import * as Api from '@/api';
import { setCookie } from 'nookies';

export const RegisterForm: React.FC = () => {
    const onSubmit = async (values: RegisterFormDTO) => {
        try {
            const { token } = await Api.auth.register(values);

            notification.success({
                message: 'Succes',
                description: 'Go to admin panel',
                duration: 2,
            });

            setCookie(null, '_token', token, {
                path: '/',
            });

            location.href = '/dashboard';
        } catch (err) {
            console.warn(err);

            notification.error({
                message: 'Error',
                description: 'Error during registration',
                duration: 2,
            });
        }
    };

    return (
        <div className={styles.formBlock}>
            <Form
                onFinish={onSubmit}
                name="register"
                labelCol={{
                    span: 8,
                }}
            >
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
                    label="Full name"
                    name="fullName"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your full name!',
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
                        Register
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};
