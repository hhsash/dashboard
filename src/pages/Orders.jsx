import React from 'react';
import OrderListItem from '../components/OrderListItem.jsx';
import { data } from '../data/data.js';

const Orders = () => {
    return (
        <div className='p-4'>
            <div className='w-full m-auto p-4 light:border rounded-lg bg-white overflow-y-auto shadow-md'>
                <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
                    <span className='font-bold'>Замовлення</span>
                    <span className='sm:text-left text-right font-bold'>Статус</span>
                    <span className='hidden md:grid font-bold'>Час замовлення</span>
                    <span className='hidden sm:grid font-bold'>Спосіб оплати</span>
                </div>
                <ul>
                    {data.map((order, id) => (
                        <OrderListItem order={order} id={id} />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Orders;
