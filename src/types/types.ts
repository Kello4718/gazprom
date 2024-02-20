export type ExchangeRateText = {
    dollar: string;
    euro: string;
    yuan: string;
};

export type CurrencyDataObject = {
    date: string;
    month: string;
    indicator: string;
    value: number;
    id: string;
};

export type CurrencyData = {
    data: CurrencyDataObject[];
};

export type CurrencyChangerItem = { name: string; currencySymbol: string; indicator: string };