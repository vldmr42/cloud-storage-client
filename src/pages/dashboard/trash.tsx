import { GetServerSidePropsContext, NextPage } from 'next';
import { checkAuth } from '@/utils/checkAuth';
import React from 'react';
import Layout from '@/layouts/Layout';

import * as Api from '@/api';
import { FileItem } from '@/api/dto/files.dto';
import FileList from '@/components/FileList';
import DashboardLayot from '@/layouts/DashboardLayot';

interface Props {
    items: FileItem[];
}

const DashboardTrash: NextPage<Props> = ({ items }) => {
    return (
        <DashboardLayot>
            <FileList items={items} />
        </DashboardLayot>
    );
};

// @ts-expect-error Property 'getLayout' does not exist on type 'FunctionComponent'
DashboardTrash.getLayout = (page: React.ReactNode) => {
    return <Layout title="Dashboard">{page}</Layout>;
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
    const authProps = await checkAuth(ctx);

    if ('redirect' in authProps) {
        return authProps;
    }

    try {
        const items = await Api.files.getAll('trash');

        return { props: { items } };
    } catch (err) {
        console.log(err);

        return { props: { items: [] } };
    }
};

export default DashboardTrash;
