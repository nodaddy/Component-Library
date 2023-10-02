const config= {
  stories: ['../src/**/*.stories.ts'],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react-webpack5",
  docs: {
    autodocs: "tag",
  },
};
export default config;