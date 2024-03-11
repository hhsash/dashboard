import React, { useEffect } from 'react';

import Header from '../components/Header';
import TopCards from '../components/TopCards';
import BarChart from '../components/BarChart';
import RecentOrders from '../components/RecentOrders';
import ChartFilters from '../components/ChartFilters';

export default function Home() {
    return (
        <>
            <div className='p-4'>
                {/* <Header /> */}
                <TopCards />
                <ChartFilters />
                <div className='grid md:grid-cols-3 grid-cols-1 gap-4'>
                    <BarChart />
                    <RecentOrders />
                </div>
            </div>
        </>
    );
}
