const {
  addons
} = require('@storybook/addons');
const {
  create
} = require('@storybook/theming/create');

const theme = create({
  base: 'dark',
  brandTitle: 'Kamontat',
});

addons.setConfig({
  panelPosition: 'bottom',
  theme,
});
