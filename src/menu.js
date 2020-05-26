export default [
  {
    label: '',
    iconName: 'Home',
    to: '/',
  },
  {
    label: 'Getting Started',
    to: '/article/Start',
  },
  {
    label: 'Samples',
    iconName: 'Button',
    $children: [
      {
        label: 'Icon',
        to: '/view/Icon',
      },
      {
        label: 'ActionButton',
        to: '/view/ActionButton'
      },
      {
        label: 'Tool',
        to: '/view/Tool',
      },
    ]
  },
  {
    label: 'Markdown',
    to: '/article/MdSample'
  },

]
