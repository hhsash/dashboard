import React from 'react';
import Select from 'react-select';
import { observer } from 'mobx-react-lite';
import { store } from '../store/store';

const Settings = () => {
    const themeOptions = [
        { value: 'light', label: 'Світла' },
        { value: 'dark', label: 'Темна' },
    ];

    const diagramColors = [
        { value: 'blue', label: 'Блакитний' },
        { value: 'red', label: 'Червоний' },
        { value: 'green', label: 'Зелений' },
    ];

    return (
        <div className='p-4'>
            <div className='w-full m-auto p-4 light:border rounded-lg bg-white dark:bg-darkCard shadow-md'>
                <div className='mb-10'>
                    <h1 className='font-bold mb-3'>Тема оформлення</h1>
                    <Select
                        value={store.theme === 'light' ? themeOptions[0] : themeOptions[1]}
                        options={themeOptions}
                        placeholder='Тема'
                        onChange={({ value }) => {
                            store.onChangeTheme(value);
                        }}
                    />
                </div>
                <div className='mb-10'>
                    <h1 className='font-bold mb-3'>Колір діаграми</h1>
                    <Select
                        defaultValue={diagramColors.find((item) => item.value === store.diagramColor)}
                        options={diagramColors}
                        placeholder='Діаграма'
                        onChange={({ value }) => {
                            store.onChangeDiagramColor(value);
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default observer(Settings);
