import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { data } from '../data/data.js';
import { observer } from 'mobx-react-lite';
import { store } from '../store/store';
import moment from 'moment';
require('moment/locale/uk');

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
    const [chartData, setChartData] = useState({
        datasets: [],
    });

    const [chartOptions, setChartOptions] = useState({});

    const getDiagramColor = () => {
        let color;
        switch (store.diagramColor) {
            case 'blue':
                color = 'rgb(53, 162, 235, 0.9)';
                break;
            case 'red':
                color = 'rgb(153, 27, 27, 0.9)';
                break;
            case 'green':
                color = 'rgb(101, 163, 13, 0.9)';
                break;
        }
        return color;
    };

    const filterData = data.filter((item) => moment(item.date).isSame(moment(), 'day'));
    const price = [...filterData.map((item) => item.total)];
    function getUniqueLastSevenDates(data) {
        // Сортировка массива данных по убыванию дат
        const sortedData = data.sort((a, b) => moment(b.date) - moment(a.date));

        // Использование Set для хранения уникальных дат
        const uniqueDates = new Set();

        // Получение уникальных дат
        sortedData.forEach((item) => {
            uniqueDates.add(moment(item.date).format('D MMMM')); // Форматирование даты в другом виде
            // if (uniqueDates.size === 7) return;
        });

        // Преобразование Set обратно в массив и сортировка по возрастанию дат
        const sortedUniqueDates = Array.from(uniqueDates).sort((a, b) => {
            const dateA = moment(a, 'D MMMM', 'uk');
            const dateB = moment(b, 'D MMMM', 'uk');
            return dateA - dateB;
        });

        return sortedUniqueDates;
    }
    function getProfitByDate(data) {
        const profitByDate = {};

        // Итерация по массиву данных
        data.forEach((item) => {
            const date = moment(item.date).format('D MMMM'); // Форматирование даты в вид "День Месяц"

            // Проверка, есть ли уже такая дата в объекте profitByDate
            if (profitByDate[date]) {
                profitByDate[date] += item.total; // Если дата уже есть, увеличиваем сумму прибыли
            } else {
                profitByDate[date] = item.total; // Если даты нет, создаем новую запись в объекте profitByDate
            }
        });

        return profitByDate;
    }
    useEffect(() => {
        setChartData({
            // labels: ['Понеділок', 'Вівторок', 'Середа', 'Четвер', `П'ятниця`, 'Субота', 'Неділя'],
            labels: getUniqueLastSevenDates(data),
            datasets: [
                {
                    label: 'Продажі ₴',
                    // data: [15127, 22201, 17490, 18938, 24182, 17842, 15475],
                    data: getProfitByDate(data),
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: getDiagramColor(),
                },
            ],
        });
        setChartOptions({
            // plugins: {
            //     legend: {
            //         position: 'top',
            //     },
            //     title: {
            //         display: true,
            //         text: 'Денна виручка',
            //     },
            // },
            maintainAspectRatio: false,
            responsive: true,
        });
    }, []);

    return (
        <>
            <div className='w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 light:border rounded-lg bg-white dark:bg-darkCard shadow-md'>
                <Bar data={chartData} options={chartOptions} />
            </div>
        </>
    );
};

export default observer(BarChart);
