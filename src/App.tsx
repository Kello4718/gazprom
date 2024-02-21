import ReactECharts from './Echarts/ReactECharts';
import { cnMixFlex } from '@consta/uikit/MixFlex';
import { Text } from '@consta/uikit/Text';
import { Spin, Button } from 'antd';

import CurrencyChanger from './components/CurrencyChanger/CurrencyChanger';
import Average from './components/Avarage';
import { getCurrency } from './slice/currencySlice';
import { useAppSelector } from './app/hooks';
import {
    useGetCurrencyDataQuery,
    useLazyGetCurrencyDataQuery,
} from './api/currencyApi';
import { CurrencyDataObject, ExchangeRateText } from './types/types';

// Настройки для графика
const getOptions = (indicator: string, xData: string[], yData: number[]) => ({
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
            fontStyle: 'normal',
            fontSize: 10,
            fontWeight: 400,
            lineHeight: 15,
            align: 'center',
            padding: [0, 0, 0, 0],
        },
        boundaryGap: false,
    },
    yAxis: {
        type: 'value',
        offset: 20,
        min: yData && Math.min(...yData) - 5,
        max: yData && Math.max(...yData) + 5,
        axisTick: {
            show: true,
            inside: true,
            length: 10,
            alignWithLabel: true,
        },
        axisLabel: {
            show: true,
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
    const { data, isFetching, isError, isSuccess } =
        useGetCurrencyDataQuery(null);
    const filteredData = data?.filter(
        (item: CurrencyDataObject) => item.indicator === indicator
    );
    const axisXData = filteredData?.map(
        (item: CurrencyDataObject) => item.month
    );
    const axisYData = filteredData?.map(
        (item: CurrencyDataObject) => item.value
    );
    const title = `КУРС ${
        exchangeRateText[currency as keyof ExchangeRateText]
    }/₽`;
    const average = (
        axisYData?.reduce((acc: number, item: number) => acc + item, 0) /
        axisYData?.length
    ).toFixed(1);

    const [getData] = useLazyGetCurrencyDataQuery();

    return (
        <>
            {/* Пока данные грузятся почему бы не показать какой-нибудь loader? */}
            {isFetching && (
                <div
                    className={cnMixFlex({
                        justify: 'center',
                        align: 'center',
                    })}
                    style={{
                        width: '100%',
                        height: '100vh',
                    }}
                >
                    <Spin size="large">
                        <div className="content" />
                    </Spin>
                </div>
            )}
            {/* А вот в случае ошибки здорово бы было показать пользователю, что что-то произошло и попытаться починить это */}
            {isError && (
                <div
                    className={cnMixFlex({
                        justify: 'center',
                        align: 'center',
                        direction: 'column',
                    })}
                    style={{
                        width: '100%',
                        height: '100vh',
                        gap: '30px 0',
                    }}
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
                        Похоже тут какие-то проблемы с интернет соединением 😒
                    </Text>
                    <Button
                        type="primary"
                        onClick={() => {
                            getData(null);
                        }}
                    >
                        Загрузить данные
                    </Button>
                </div>
            )}
            {/* Ну и конечно же в случае успеха показать то, зачем он сюда и пришел */}
            {isSuccess && (
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
                            {title}
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
                            style={{
                                width: 'min(100%, 968px)',
                                height: '318px',
                            }}
                        />
                        <Average average={Number(average)} />
                    </div>
                </>
            )}
        </>
    );
};

export default App;
