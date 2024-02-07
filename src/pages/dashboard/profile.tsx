import { User } from '@/api/dto/auth.dto';
import { Button } from 'antd';
import { NextPage } from 'next';
import React from 'react';

interface Props {
    userData: User;
}

const DashboardProfilePage: NextPage<Props> = ({ userData }) => {
    return (
        <main>
            <div>
                <h1></h1>
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
                <Button type="primary" danger>
                    Exit
                </Button>
            </div>
        </main>
    );
};

export default DashboardProfilePage;
