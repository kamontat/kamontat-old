const {
  addons
} = require('@storybook/addons');
const {
  create
} = require('@storybook/theming/create');

const theme = create({
  base: 'dark',
  brandTitle: 'Kamontat Storybook',
});

addons.setConfig({
  panelPosition: 'bottom',
  theme,
});
