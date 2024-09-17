import React from 'react'; // React를 import 추가
import type { Preview } from '@storybook/react';
import ThemeProvider from '../src/context/ThemeContext';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        backgrounds: {
            default: 'gray', // 기본 배경 색상을 회색으로 설정
            values: [
                { name: 'gray', value: '#808080' }, // 회색 배경 추가
                { name: 'white', value: '#ffffff' }, // 다른 배경 색상 추가 가능
            ],
        },
    },
    decorators: [
        (Story) => (
            <ThemeProvider>
                <Story />
            </ThemeProvider>
        ),
    ],
};

export default preview;
