module.exports = {
  content: ['./src/**/*.{html,js,jsx,tsx}'],
  darkMode: 'class',
  important: '#root',

  theme: {
    screens: {
      'custom-bk': '965px',
    },
    colors: {
      darkybg: 'var(--background)',
      darkysubg: 'var(--subbackground)',
    },
    extend: {},
  },
  plugins: [
    // Allow to select child
    function ({ addVariant }) {
      addVariant('directchild', '& > :first-child');
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    },
  ],
};
