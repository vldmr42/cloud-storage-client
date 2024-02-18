import React from 'react';

import styles from './FileActions.module.scss';
import { Button, Popconfirm } from 'antd';

interface FileActionsProps {
    onClickRemove: VoidFunction;
    onClickShare: VoidFunction;
    isActive?: boolean;
}

const FileActions: React.FC<FileActionsProps> = ({
    onClickRemove,
    onClickShare,
    isActive = false,
}) => {
    return (
        <div className={styles.root}>
            <Button onClick={onClickShare} disabled={!isActive}>
                Share
            </Button>

            <Popconfirm
                title="Delete these file(s)"
                description="All files will be moved to trash"
                okText="Yes"
                cancelText="No"
                disabled={!isActive}
                onConfirm={onClickRemove}
            >
                <Button disabled={!isActive} danger>
                    Delete
                </Button>
            </Popconfirm>
        </div>
    );
};

export default FileActions;
