import React from 'react';
import { store } from '../store/store';

const TopCards = () => {
    return (
        <div className='grid lg:grid-cols-6 gap-4 mb-4'>
            <div className='lg:col-span-2 col-span-1 bg-white dark:bg-darkCard flex justify-between w-full light:border p-4 rounded-lg shadow-md'>
                <div className='flex flex-col w-full pb-4'>
                    <p className='text-gray-600 dark:text-slate-400'>Daily Revenue</p>
                    <p className='text-2xl font-bold dark:text-white'>₴ 7,846</p>
                </div>
            </div>
            <div className='lg:col-span-2 col-span-1 bg-white dark:bg-darkCard flex justify-between w-full light:border p-4 rounded-lg shadow-md'>
                <div className='flex flex-col w-full pb-4'>
                    <p className='text-gray-600 dark:text-slate-400'>Середній чек</p>
                    <p className='text-2xl font-bold dark:text-white'>₴ {store.averageTotal}</p>
                </div>
            </div>
            <div className='lg:col-span-2 col-span-1 bg-white dark:bg-darkCard flex justify-between w-full light:border p-4 rounded-lg shadow-md'>
                <div className='flex flex-col w-full pb-4'>
                    <p className='text-gray-600 dark:text-slate-400'>Покупців</p>
                    <p className='text-2xl font-bold dark:text-white'>{store.uniqueCustomersCount}</p>
                </div>
            </div>
            <div className='lg:col-span-2 col-span-1 bg-white dark:bg-darkCard flex justify-between w-full light:border p-4 rounded-lg shadow-md'>
                <div className='flex flex-col w-full pb-4'>
                    <p className='text-gray-600 dark:text-slate-400'>Відсоток завершення замовлень</p>
                    <p className='text-2xl font-bold dark:text-white'>{store.successRatio} %</p>
                </div>
            </div>
            <div className='lg:col-span-2 col-span-1 bg-white dark:bg-darkCard flex justify-between w-full light:border p-4 rounded-lg shadow-md'>
                <div className='flex flex-col w-full pb-4'>
                    <p className='text-gray-600 dark:text-slate-400'>Відсоток скасованних замовлень</p>
                    <p className='text-2xl font-bold dark:text-white'>{store.cancellRatio} %</p>
                </div>
            </div>
            <div className='lg:col-span-2 col-span-1 bg-white dark:bg-darkCard flex justify-between w-full light:border p-4 rounded-lg shadow-md'>
                <div className='flex flex-col w-full pb-4'>
                    <p className='text-gray-600 dark:text-slate-400'>Каса</p>
                    <p className='text-2xl font-bold dark:text-white'>₴ {store.totalSum}</p>
                </div>
            </div>
        </div>
    );
};

export default TopCards;
