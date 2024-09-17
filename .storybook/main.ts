import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path'; // path 모듈을 import 해야 합니다.

const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/preset-create-react-app',
        '@storybook/addon-onboarding',
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@chromatic-com/storybook',
        '@storybook/addon-interactions',
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },
    staticDirs: ['..\\public'],
    webpackFinal: async (config) => {
        // config.resolve가 undefined가 아닐 경우에만 modules를 추가합니다.
        if (config.resolve) {
            config.resolve.modules = [
                ...(config.resolve.modules || []), // 기존의 modules가 있을 경우 유지
                path.resolve(__dirname, '../src'),
            ];
        } else {
            // config.resolve가 undefined인 경우 새로운 resolve 객체를 생성합니다.
            config.resolve = {
                modules: [path.resolve(__dirname, '../src')],
            };
        }
        return config;
    },
};

export default config;
