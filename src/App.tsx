import React from 'react';
import { ReactECharts } from './Echarts/ReactECharts';

// const mockData = [
// 	{
// 		date: '2016-02-01',
// 		month: 'фев 2016',
// 		indicator: 'Курс доллара',
// 		value: 72,
// 	},
// 	{
// 		date: '2016-03-02',
// 		month: 'мар 2016',
// 		indicator: 'Курс доллара',
// 		value: 80,
// 	},
// 	{
// 		date: '2016-04-01',
// 		month: 'апр 2016',
// 		indicator: 'Курс доллара',
// 		value: 77,
// 	},
// 	{
// 		date: '2016-05-02',
// 		month: 'май 2016',
// 		indicator: 'Курс доллара',
// 		value: 78,
// 	},
// 	{
// 		date: '2016-02-01',
// 		month: 'июн 2016',
// 		indicator: 'Курс доллара',
// 		value: 77,
// 	},
// 	{
// 		date: '2016-03-02',
// 		month: 'июл 2016',
// 		indicator: 'Курс доллара',
// 		value: 76,
// 	},
// 	{
// 		date: '2016-04-01',
// 		month: 'авг 2016',
// 		indicator: 'Курс доллара',
// 		value: 81,
// 	},
// 	{
// 		date: '2016-05-02',
// 		month: 'сент 2016',
// 		indicator: 'Курс доллара',
// 		value: 82,
// 	},

// 	{
// 		date: '2016-02-01',
// 		month: 'фев 2016',
// 		indicator: 'Курс евро',
// 		value: 90,
// 	},
// 	{
// 		date: '2016-03-02',
// 		month: 'мар 2016',
// 		indicator: 'Курс евро',
// 		value: 88,
// 	},
// 	{
// 		date: '2016-04-01',
// 		month: 'апр 2016',
// 		indicator: 'Курс евро',
// 		value: 87,
// 	},
// 	{
// 		date: '2016-05-02',
// 		month: 'май 2016',
// 		indicator: 'Курс евро',
// 		value: 91,
// 	},
// 	{
// 		date: '2016-02-01',
// 		month: 'июн 2016',
// 		indicator: 'Курс евро',
// 		value: 92,
// 	},
// 	{
// 		date: '2016-03-02',
// 		month: 'июл 2016',
// 		indicator: 'Курс евро',
// 		value: 93,
// 	},
// 	{
// 		date: '2016-04-01',
// 		month: 'авг 2016',
// 		indicator: 'Курс евро',
// 		value: 89,
// 	},
// 	{
// 		date: '2016-05-02',
// 		month: 'сент 2016',
// 		indicator: 'Курс евро',
// 		value: 88,
// 	},

// 	{
// 		date: '2016-02-01',
// 		month: 'фев 2016',
// 		indicator: 'Курс юаня',
// 		value: 22,
// 	},
// 	{
// 		date: '2016-03-02',
// 		month: 'мар 2016',
// 		indicator: 'Курс юаня',
// 		value: 24,
// 	},
// 	{
// 		date: '2016-04-01',
// 		month: 'апр 2016',
// 		indicator: 'Курс юаня',
// 		value: 25,
// 	},
// 	{
// 		date: '2016-05-02',
// 		month: 'май 2016',
// 		indicator: 'Курс юаня',
// 		value: 21,
// 	},
// 	{
// 		date: '2016-02-01',
// 		month: 'июн 2016',
// 		indicator: 'Курс юаня',
// 		value: 23,
// 	},
// 	{
// 		date: '2016-03-02',
// 		month: 'июл 2016',
// 		indicator: 'Курс юаня',
// 		value: 24,
// 	},
// 	{
// 		date: '2016-04-01',
// 		month: 'авг 2016',
// 		indicator: 'Курс юаня',
// 		value: 26,
// 	},
// 	{
// 		date: '2016-05-02',
// 		month: 'сент 2016',
// 		indicator: 'Курс юаня',
// 		value: 19,
// 	},
// ];

type MinMax = {
	min: number;
	max: number;
};

const option = {
	color: ['#F38B00'],
	tooltip: {
		show: true,
		trigger: 'axis',
		// axisPointer: { snap: true },
	},
	xAxis: {
		type: 'category',
		data: [
			'фев 2016',
			'мар 2016',
			'апр 2016',
			'май 2016',
			'июн 2016',
			'июл 2016',
			'авг 2016',
			'сент 2016',
		],
		offset: 0,
		axisLine: {
			show: false,
			symbol: 'test',
		},
		axisTick: {
			show: false,
		},
		axisLabel: {
			show: true,
			margin: 30,
			fontFamily: 'open sans',
			fontStyle: 'normal',
			fontSize: 10,
			fontWeight: 400,
			lineHeight: 15,
			align: 'center',
			color: '#00203360',
			padding: [0, 0, 0, 0],
		},
		boundaryGap: false,
	},
	yAxis: {
		type: 'value', // отображает тип данных
		offset: 20, // сдвиг данных по оси Х
		min: 72,
		max: function (value: MinMax) {
			return value.max + 2;
		},
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
			color: '#667985',
			padding: [0, 0, 0, 0],
		},
	},
	series: [
		{
			name: 'Курс доллара',
			type: 'line',
			data: [72, 80, 77, 78, 77, 76, 81, 82],
			symbol: 'none',
			lineStyle: {
				type: 'solid',
				width: 2,
				color: '#F38B00',
			},
		},
	],
};

// {
// 		date: '2016-02-01',
// 		month: 'фев 2016',
// 		indicator: 'Курс доллара',
// 		value: 72,
// 	},
// 	{
// 		date: '2016-03-02',
// 		month: 'мар 2016',
// 		indicator: 'Курс доллара',
// 		value: 80,
// 	},
// 	{
// 		date: '2016-04-01',
// 		month: 'апр 2016',
// 		indicator: 'Курс доллара',
// 		value: 77,
// 	},
// 	{
// 		date: '2016-05-02',
// 		month: 'май 2016',
// 		indicator: 'Курс доллара',
// 		value: 78,
// 	},
// 	{
// 		date: '2016-02-01',
// 		month: 'июн 2016',
// 		indicator: 'Курс доллара',
// 		value: 77,
// 	},
// 	{
// 		date: '2016-03-02',
// 		month: 'июл 2016',
// 		indicator: 'Курс доллара',
// 		value: 76,
// 	},
// 	{
// 		date: '2016-04-01',
// 		month: 'авг 2016',
// 		indicator: 'Курс доллара',
// 		value: 81,
// 	},
// 	{
// 		date: '2016-05-02',
// 		month: 'сент 2016',
// 		indicator: 'Курс доллара',
// 		value: 82,
// 	},

function App() {
	return (
		<div>
			<ReactECharts option={option} style={{ height: '50vh' }} />
		</div>
	);
}

export default App;
