import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import type { CSSProperties, FC } from 'react';

import { forceResizeCharts } from './UtilsForCharts';
import { IOnEvents } from '../interfaces/interfaces';
interface ReactEChartsProps {
    option: any; // We leave any, since not all typed echarts options are needed to work
    onEvents?: IOnEvents;
    style?: CSSProperties;
    settings?: echarts.SetOptionOpts;
    loading?: boolean;
    theme?: 'light' | 'dark';
    forceResize?: boolean;
}

const ReactECharts: FC<ReactEChartsProps> = ({
    option,
    onEvents,
    style,
    settings,
    loading,
    theme,
    forceResize = true,
}) => {
    const chartRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        // Initialize chart
        let chart: echarts.ECharts | undefined;

        if (chartRef.current !== null) {
            chart = echarts.init(chartRef.current, theme);
        }

        // Add chart resize listener
        // ResizeObserver is leading to a bit janky UX
        function resizeChart() {
            chart?.resize();
        }

        window.addEventListener('resize', resizeChart);

        let observer: MutationObserver | false | undefined = false;

        if (forceResize) observer = forceResizeCharts(resizeChart);

        // Return cleanup function
        return () => {
            chart?.dispose();
            window.removeEventListener('resize', resizeChart);
        };
    }, [theme]);

    useEffect(() => {
        // Update chart
        if (chartRef.current !== null) {
            const chart = echarts.getInstanceByDom(chartRef.current);
            chart?.setOption(option, settings);
            chart?.on(onEvents?.type!, function (params: any) {
                onEvents?.func(params);
                chart?.setOption(option, settings);
            });
        }
    }, [option, settings, onEvents, theme]); // Whenever theme changes we need to add option and setting due to it being deleted in cleanup function

    useEffect(() => {
        // Update chart
        if (chartRef.current !== null) {
            const chart = echarts.getInstanceByDom(chartRef.current);

            loading === true ? chart?.showLoading() : chart?.hideLoading();
        }
    }, [loading, theme]);

    return (
        <div
            ref={chartRef}
            style={{ width: '100%', height: '100%', ...style }}
        />
    );
};

export default ReactECharts;
