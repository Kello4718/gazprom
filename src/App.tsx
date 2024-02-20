import { ReactECharts } from './Echarts/ReactECharts';
import { cnMixFlex } from '@consta/uikit/MixFlex';
import { Text } from '@consta/uikit/Text';

import CurrencyChanger from './components/CurrencyChanger/CurrencyChanger';
import Average from './components/Avarage';
import { getCurrency } from './slice/currencySlice';
import { useAppSelector } from './app/hooks';
import { useGetCurrencyDataQuery } from './api/currencyApi';

type ExchangeRateText = {
    dollar: string;
    euro: string;
    yuan: string;
};

type CurrencyDataObject = {
    date: string;
    month: string;
    indicator: string;
    value: number;
    id: string;
};

type CurrencyData = {
    data: CurrencyDataObject[];
};

const getOptions = (indicator: string, xData: string[], yData: number[]) => ({
    color: ['#f38b00'],
    tooltip: {
        show: true,
        trigger: 'axis',
        className: 'tooltip',
        formatter: `
                <span class="tooltip__date">{b} год</span><br>
                <span class="tooltip__currency">{a}</span> <span class="tooltip__value">{c}₽</span>
            `,
    },
    xAxis: {
        type: 'category',
        data: xData,
        offset: 0,
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: true,
            margin: 30,
            fontFamily: 'Open sans Regular', // todo
            fontStyle: 'normal',
            fontSize: 10,
            fontWeight: 400,
            lineHeight: 15,
            align: 'center',
            color: 'var(--grey02alpha60)', // todo
            padding: [0, 0, 0, 0],
        },
        boundaryGap: false,
    },
    yAxis: {
        type: 'value', // отображает тип данных
        offset: 20, // сдвиг данных по оси Х
        min: yData && Math.min(...yData) - 5,
        max: yData && Math.max(...yData) + 5,
        axisTick: {
            show: true, // показать/скрыть черточку
            inside: true, // черточка справа
            length: 10, // длина черточки
            alignWithLabel: true,
        },
        axisLabel: {
            show: true,
            interval: 2, // TODO
            showMinLabel: false,
            fontFamily: 'inter',
            fontStyle: 'normal',
            fontSize: 10,
            fontWeight: 400,
            lineHeight: 15,
            color: 'var(--grey01)',
            padding: [0, 0, 0, 0],
        },
    },
    series: [
        {
            name: indicator,
            data: yData,
            type: 'line',
            symbol: 'none',
            lineStyle: {
                type: 'solid',
                width: 2,
                color: '#f38b00',
            },
        },
    ],
});

const exchangeRateText = {
    dollar: 'ДОЛЛАРА, $',
    euro: 'ЕВРО, €',
    yuan: 'ЮАНЯ, ¥',
} as ExchangeRateText;

const App = () => {
    const { currency, indicator } = useAppSelector(getCurrency);
    const { data } = useGetCurrencyDataQuery<CurrencyData>({});
    const filteredData = data?.filter((item) => item.indicator === indicator);
    const axisXData = filteredData?.map((item) => item.month);
    const axisYData = filteredData?.map((item) => item.value);
    const average = (
        axisYData?.reduce((acc, item) => acc + item, 0) / axisYData?.length
    ).toFixed(1);

    return (
        <>
            <div
                className={cnMixFlex({
                    justify: 'space-between',
                    align: 'center',
                })}
            >
                <Text
                    as="h1"
                    font="primary"
                    lineHeight="l"
                    weight="bold"
                    transform="uppercase"
                    view="primary"
                    color="var(--grey02)"
                    style={{
                        fontFamily: 'Inter Bold',
                        fontSize: '20px',
                        lineHeight: '150%',
                        margin: 0,
                    }}
                >
                    {`КУРС ${
                        exchangeRateText[currency as keyof ExchangeRateText]
                    }/₽`}
                </Text>
                <CurrencyChanger />
            </div>
            <div
                className={cnMixFlex({
                    justify: 'space-between',
                    align: 'center',
                })}
                style={{ padding: '0 14px' }}
            >
                <ReactECharts
                    option={getOptions(indicator, axisXData, axisYData)}
                    style={{ width: 'min(100%, 968px)', height: '318px' }}
                />
                <Average average={Number(average)} />
            </div>
        </>
    );
};

export default App;
