import React from 'react';
import { Link } from 'react-router-dom';
import { RxSketchLogo, RxDashboard, RxPerson } from 'react-icons/rx';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { FiSettings } from 'react-icons/fi';
import { Tooltip } from 'react-tooltip';
import { observer } from 'mobx-react-lite';
import { store } from '../store/store.js';

const Sidebar = ({ children }) => {
    return (
        <>
            <div data-theme={store.theme} className='flex'>
                <div className='fixed w-20 h-screen p-4 bg-white light:border-r-[1px] flex flex-col justify-between dark:bg-dark dark:text-white'>
                    <div className='flex flex-col items-center'>
                        <Link to='/'>
                            <div
                                data-tooltip-id='menu-item-tooltip'
                                data-tooltip-content='Головна'
                                className='bg-gray-100 dark:bg-darkIcon cursor-pointer my-4 p-3 rounded-lg inline-block'
                            >
                                <RxDashboard size={20} />
                            </div>
                        </Link>
                        {/* <Link to='/customers'>
                        <div className='bg-gray-100  cursor-pointer my-4 p-3 rounded-lg inline-block'>
                            <RxPerson size={20} />
                        </div>
                    </Link> */}
                        <Link to='/orders'>
                            <div
                                data-tooltip-id='menu-item-tooltip'
                                data-tooltip-content='Замовлення'
                                className='bg-gray-100 dark:bg-darkIcon cursor-pointer my-4 p-3 rounded-lg inline-block'
                            >
                                <HiOutlineShoppingBag size={20} />
                            </div>
                        </Link>
                        <Link to='/settings'>
                            <div
                                data-tooltip-id='menu-item-tooltip'
                                data-tooltip-content='Налаштування'
                                className='bg-gray-100 dark:bg-darkIcon cursor-pointer my-4 p-3 rounded-lg inline-block'
                            >
                                <FiSettings size={20} />
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='ml-20 w-full'>{children}</div>
            </div>
            <Tooltip id='menu-item-tooltip' />
        </>
    );
};

export default observer(Sidebar);
