import { GetServerSidePropsContext, NextPage } from 'next';
import { checkAuth } from '@/utils/checkAuth';
import React from 'react';
import Layout from '@/layouts/Layout';

const DashboardPage: NextPage = () => {
    return (
        <main>
            <h1>Dashboard</h1>
        </main>
    );
};

DashboardPage.getLayout = (page: React.ReactNode) => {
    return <Layout title="Dashboard">{page}</Layout>;
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
    const authProps = await checkAuth(ctx);

    if ('redirect' in authProps) {
        return authProps;
    }

    return {
        props: {},
    };
};

export default DashboardPage;
