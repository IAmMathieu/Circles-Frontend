module.exports = {
  content: ['./src/**/*.{html,js,jsx,tsx}'],
  darkMode: 'class',
  important: '#root',

  theme: {
    screens: {
      'custom-bk': '965px',
      'small': '600px'
    },
    colors: {
      darkybg: 'var(--background)',
      darkysubg: 'var(--subbackground)',
      buttonbg: 'var(--backgroundButton)',
    },
  },
  extend: {},
  plugins: [],
};
