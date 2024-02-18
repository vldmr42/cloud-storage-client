import { FileItem } from '@/api/dto/files.dto';
import FileActions from '@/components/FileActions';
import FileList from '@/components/FileList';
import { Empty } from 'antd';
import React from 'react';

interface FilesProps {
    items: FileItem[];
    withActions?: boolean;
}

export const Files: React.FC<FilesProps> = ({ items, withActions }) => {
    const [files, setFiles] = React.useState(items || []);

    const onClickRemove = () => {};
    // const onFileSelect = (id:number, type: "select" | "unselect") => {}
    const onClickShare = () => {
        alert('share');
    };
    return (
        <div>
            {files.length ? (
                <>
                    {withActions && (
                        <FileActions
                            onClickRemove={onClickRemove}
                            onClickShare={onClickShare}
                            isActive
                        />
                    )}
                    <FileList items={files} />
                </>
            ) : (
                <Empty
                    className="empty-block"
                    description="File list is empty"
                />
            )}
        </div>
    );
};

export default Files;
