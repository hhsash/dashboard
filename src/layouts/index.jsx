import React from 'react';
import { Outlet } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { store } from '../store/store.js';

const Layout = () => {
    return (
        <div className='min-h-screen p-4 bg-gray-100 dark:text-white dark:bg-dark'>
            <Outlet />
        </div>
    );
};

export default observer(Layout);
