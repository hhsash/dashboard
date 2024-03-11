import React from 'react';
import { FaShoppingBag } from 'react-icons/fa';

const OrderListItem = ({ order, id }) => {
    const orderStatus = (status) => {
        switch (status) {
            case 'Processing':
                return 'Обробляється';
            case 'Cancelled':
                return 'Скасовано';
            case 'Completed':
                return 'Виконано';
            case 'On Hold':
                return 'На утриманні';
        }
    };
    return (
        <li
            key={id}
            className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between'
        >
            <div className='flex'>
                {/* <div className='bg-purple-100 p-3 rounded-lg'>
                    <FaShoppingBag className='text-purple-800' />
                </div> */}
                <div className='pl-4'>
                    <p className='text-gray-800 font-bold'>₴ {order.total.toLocaleString()}</p>
                    <p className='text-gray-800 text-sm'>
                        {order.name.first + ' ' + order.name.last}
                    </p>
                </div>
            </div>
            <p className='text-gray-600 sm:text-left text-right'>
                <span
                    className={
                        order.status == 'Processing'
                            ? 'bg-blue-200 p-2 rounded-lg'
                            : order.status == 'Completed'
                            ? 'bg-green-200 p-2 rounded-lg'
                            : order.status == 'Cancelled'
                            ? 'bg-red-200 p-2 rounded-lg'
                            : 'bg-yellow-200 p-2 rounded-lg'
                    }
                >
                    {orderStatus(order.status)}
                </span>
            </p>
            <p className='hidden md:flex'>{order.date}</p>
            <p>{order.method}</p>
        </li>
    );
};

export default OrderListItem;
