import UploadButton from '@/components/UploadButton';
import {
    FileOutlined,
    FileImageOutlined,
    DeleteOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import { useRouter } from 'next/router';
import React from 'react';

import styles from '@/styles/Home.module.scss';

const DashboardLayot: React.FC<React.PropsWithChildren> = ({ children }) => {
    const router = useRouter();
    const selectedMenu = router.pathname;
    return (
        <main className={styles.dashboardContainer}>
            <div className={styles.sidebar}>
                <UploadButton />
                <Menu
                    className={styles.menu}
                    mode="inline"
                    selectedKeys={[selectedMenu]}
                    items={[
                        {
                            key: '/dashboard',
                            icon: <FileOutlined />,
                            label: 'Files',
                            onClick: () => router.push('/dashboard'),
                        },
                        {
                            key: '/dashboard/photos',
                            icon: <FileImageOutlined />,
                            label: 'Photos',
                            onClick: () => router.push('/dashboard/photos'),
                        },
                        {
                            key: '/dashboard/trash',
                            icon: <DeleteOutlined />,
                            label: 'Trash',
                            onClick: () => router.push('/dashboard/trash'),
                        },
                    ]}
                ></Menu>
            </div>
            <div className="container">{children}</div>
        </main>
    );
};

export default DashboardLayot;
