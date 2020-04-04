const {
  action
} = require("@storybook/addon-actions")

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
};
