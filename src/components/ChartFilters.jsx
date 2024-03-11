import React from 'react';
import Select from 'react-select';
import { observer } from 'mobx-react-lite';
import { store } from '../store/store';

const ChartFilters = () => {
    const paymentTypeOptions = [
        { value: 'All', label: 'Усі' },
        { value: 'PayPal', label: 'PayPal' },
        { value: 'Visa', label: 'Visa' },
        { value: 'MasterCard', label: 'MasterCard' },
        { value: 'Cash', label: 'Готівка' },
    ];

    const orderStatusOptions = [
        { value: 'All', label: 'Усі' },
        { value: 'Completed', label: 'Виконано' },
        { value: 'Processing', label: 'Обробляється' },
        { value: 'On Hold', label: 'На утриманні' },
        { value: 'Cancelled', label: 'Скасовано' },
    ];

    const orderDateOptions = [
        { value: 'All', label: 'Усі' },
        { value: 'Today', label: 'Сьогодні' },
        { value: 'Week', label: 'Останній тиждень' },
        { value: 'Month', label: 'Останній місяць' },
    ];

    return (
        <div className='mb-4 bg-white dark:bg-darkCard flex justify-around w-full light:border p-4 rounded-lg shadow-md'>
            <div className='w-3/12'>
                <Select
                    options={orderDateOptions}
                    placeholder='Час оформлення'
                    onChange={(value) => {
                        store.onChangeOrderDateFilter(value);
                    }}
                />
            </div>
            <div className='w-3/12'>
                <Select
                    options={orderStatusOptions}
                    placeholder='Статус замовлення'
                    onChange={(value) => {
                        store.onChangeOrderStatustFilter(value);
                    }}
                />
            </div>
            <div className='w-3/12'>
                <Select
                    options={paymentTypeOptions}
                    placeholder='Спосіб оплати'
                    onChange={(value) => {
                        store.onChangePaymentFilter(value);
                    }}
                />
            </div>
        </div>
    );
};

export default observer(ChartFilters);
