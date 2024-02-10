import { User } from '@/api/dto/auth.dto';
import { Button } from 'antd';
import { GetServerSidePropsContext, NextPage } from 'next';
import React from 'react';

import * as Api from '@/api';
import styles from '@/styles/Profile.module.scss';
import { checkAuth } from '@/utils/checkAuth';
import Layout from '@/layouts/Layout';

interface Props {
    userData: User;
}

const DashboardProfilePage: NextPage<Props> = ({ userData }) => {
    const onClickLogout = () => {
        if (window.confirm('Are you sure you want to quit?')) {
            Api.auth.logout();
            location.href = '/';
        }
    };

    return (
        <main>
            <div className={styles.root}>
                <h1>My Profile</h1>
                <br />
                <p>
                    ID: <b>{userData.id}</b>
                </p>
                <p>
                    Full name: <b>{userData.fullName}</b>
                </p>
                <p>
                    Email: <b>{userData.email}</b>
                </p>
                <br />
                <Button onClick={onClickLogout} type="primary" danger>
                    Exit
                </Button>
            </div>
        </main>
    );
};

// @ts-expect-error Property 'getLayout' does not exist on type 'FunctionComponent'
DashboardProfilePage.getLayout = (page: React.ReactNode) => {
    return <Layout title="Dashboard / Profile">{page}</Layout>;
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
    const authProps = await checkAuth(ctx);

    if ('redirect' in authProps) {
        return authProps;
    }

    const userData = await Api.auth.getMe();

    return {
        props: {
            userData,
        },
    };
};

export default DashboardProfilePage;
