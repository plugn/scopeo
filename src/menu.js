export default [
  {
    label: '',
    iconName: 'Home',
    to: '/',
  },
  {
    label: 'Icon',
    to: '/view/Icon',
  },
  {
    label: 'Buttons',
    iconName: 'Button',
    $children: [
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
    label: 'Lists',
    iconName: 'ViewList',
    disabled: true,
  },
  {
    label: 'Markdown Features',
    to: '/article/MdSample'
  },
  // {
  //   label: 'Markdown Styles',
  //   to: '/article/Text'
  // },

]
