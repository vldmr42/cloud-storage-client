import { CloudUploadOutlined } from '@ant-design/icons';
import { Button, Upload, UploadFile, notification } from 'antd';
import React from 'react';

import styles from '@/styles/Home.module.scss';
import * as Api from '@/api';

const UploadButton: React.FC = () => {
    const [fileList, setFileList] = React.useState<UploadFile[]>([]);

    const onUploadSucces = async (options: any) => {
        try {
            const file = await Api.files.uploadFile(options);
            setFileList([]);
        } catch (err) {
            notification.error({
                message: 'Error',
                description: 'Uploading failed',
                duration: 2,
            });
        }
    };
    return (
        <Upload
            customRequest={onUploadSucces}
            fileList={fileList}
            onChange={({ fileList }) => setFileList(fileList)}
            className={styles.upload}
        >
            <Button type="primary" icon={<CloudUploadOutlined />} size="large">
                Upload file
            </Button>
        </Upload>
    );
};

export default UploadButton;
