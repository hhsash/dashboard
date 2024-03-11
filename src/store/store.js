import { action, makeObservable, observable } from 'mobx';
import { data } from '../data/data';

class Store {
    theme = localStorage.getItem('theme') || 'light';
    diagramColor = localStorage.getItem('diagramColor') || 'blue';
    paymentFilter = '';
    orderDateFilter = '';
    orderStatustFilter = '';

    constructor() {
        makeObservable(this, {
            theme: observable,
            paymentFilter: observable,
            orderDateFilter: observable,
            orderStatustFilter: observable,
            onChangePaymentFilter: action,
            onChangeOrderDateFilter: action,
            onChangeOrderStatustFilter: action,
        });
    }

    get averageTotal() {
        // Подсчитываем среднее значение total
        const totalSum = data.reduce(
            (accumulator, currentValue) => accumulator + currentValue.total,
            0,
        );
        return (totalSum / data.length).toFixed(2);
    }

    get uniqueCustomersCount() {
        // Создаем массив уникальных имен покупателей
        const uniqueNames = [
            ...new Set(data.map((item) => `${item.name.first} ${item.name.last}`)),
        ];
        return uniqueNames.length;
    }

    get successRatio() {
        // Подсчитываем количество успешно завершённых заказов
        const completedOrdersCount = data.filter((item) => item.status === 'Completed').length;
        // Подсчитываем общее количество заказов
        const totalOrdersCount = data.length;
        // Вычисляем соотношение успешно завершённых заказов к общему количеству заказов и переводим в проценты
        const ratio = (completedOrdersCount / totalOrdersCount) * 100;
        return ratio.toFixed(2); // Округляем до двух знаков после запятой
    }

    get cancellRatio() {
        // Подсчитываем количество успешно завершённых заказов
        const completedOrdersCount = data.filter((item) => item.status === 'Cancelled').length;
        // Подсчитываем общее количество заказов
        const totalOrdersCount = data.length;
        // Вычисляем соотношение успешно завершённых заказов к общему количеству заказов и переводим в проценты
        const ratio = (completedOrdersCount / totalOrdersCount) * 100;
        return ratio.toFixed(2); // Округляем до двух знаков после запятой
    }

    get totalSum() {
        // Подсчитываем сумму всех значений поля "total"
        const sum = data.reduce((accumulator, currentValue) => accumulator + currentValue.total, 0);
        return sum.toFixed(2); // Округляем до двух знаков после запятой
    }

    onChangeTheme = (value) => {
        localStorage.setItem('theme', value);
        this.theme = value;
    };

    onChangeDiagramColor = (value) => {
        localStorage.setItem('diagramColor', value);
        this.diagramColor = value;
    };

    onChangePaymentFilter = (value) => {
        this.paymentFilter = value.value;
    };
    onChangeOrderDateFilter = (value) => {
        this.orderDateFilter = value.value;
    };
    onChangeOrderStatustFilter = (value) => {
        this.orderStatustFilter = value.value;
    };
}

export const store = new Store();
