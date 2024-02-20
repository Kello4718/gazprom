import { cnMixFlex } from '@consta/uikit/MixFlex';
import { Text } from '@consta/uikit/Text';
import { FC } from 'react';

type AverageProps = {
    average: number;
};

const Average: FC<AverageProps> = ({ average }) => {
    return (
        <div
            className={cnMixFlex({
                direction: 'column',
                align: 'center',
            })}
        >
            <Text
                align="center"
                style={{
                    fontFamily: 'Inter Regular',
                    fontSize: '16px',
                    lineHeight: '150%',
                    color: 'var(--grey01)',
                    margin: 0,
                }}
            >
                Среднее за период
            </Text>
            <Text
                style={{
                    fontFamily: 'Inter Regular',
                    fontSize: '20px',
                    lineHeight: '150%',
                    color: 'var(--grey01)',
                }}
            >
                <span
                    style={{
                        fontFamily: 'Inter Regular',
                        fontSize: '48px',
                        lineHeight: '150%',
                        color: 'var(--main-color)',
                    }}
                >
                    {`${average} `}
                </span>
                ₽
            </Text>
        </div>
    );
};

export default Average;
