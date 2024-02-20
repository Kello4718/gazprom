import { RadioGroup } from '@consta/uikit/RadioGroup';
import { useState } from 'react';

import styles from './CurrencyChanger.module.css';
import { useAppDispatch } from '../../app/hooks';
import { updateState } from '../../slice/currencySlice';

type Item = { name: string; currencySymbol: string; indicator: string };

const items = [
    { name: 'dollar', currencySymbol: '$', indicator: 'Курс доллара' },
    { name: 'euro', currencySymbol: '€', indicator: 'Курс евро' },
    { name: 'yuan', currencySymbol: '¥', indicator: 'Курс юаня' },
];

const CurrencyChanger = () => {
    const [value, setValue] = useState<Item>(items[0]);
    const dispatch = useAppDispatch();
    return (
        <div className="currency">
            <RadioGroup
                value={value}
                items={items}
                getItemLabel={(item) => item.currencySymbol}
                direction="row"
                onChange={({ value }) => {
                    setValue(value);
                    dispatch(
                        updateState({
                            currency: value.name,
                            indicator: value.indicator,
                        })
                    );
                }}
                className={styles.CurrencyGroup}
            />
        </div>
    );
};

export default CurrencyChanger;
