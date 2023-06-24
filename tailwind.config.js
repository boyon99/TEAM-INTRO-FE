/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: {
        1000: '#070622',
        900: '#0F0E4D',
        800: '#171579',
        700: '#1F1DA4',
        600: '#2824D0',
        500: '#4B48DF',
        400: '#7673E7',
        300: '#A09FEE',
        200: '#CBCAF6',
        150: '#E0E0FA',
        100: '#F6F6FD',
      },
      GrayScalePrimary: {
        900: '#292832',
        800: '#403F4E',
        700: '#57566A',
        600: '#6E6D86',
        550: '#7B7A93',
        500: '#89889E',
        400: '#A5A4B5',
        350: '#B3B2C0',
        300: '#C1C0CC',
        250: '#CFCED7',
        200: '#DDDCE3',
        150: '#EAEAEE',
        100: '#F8F8FA',
      },
      GrayScaleNeutral: {
        1000: '#131313',
        900: '#2D2D2D',
        800: '#464646',
        700: '#606060',
        650: '#6D6D6D',
        600: '#797979',
        550: '#868686',
        500: '#939393',
        450: '#A0A0A0',
        400: '#ACACAC',
        350: '#B9B9B9',
        300: '#C6C6C6',
        250: '#D3D3D3',
        200: '#DFDFDF',
        150: '#ECECEC',
        100: '#F9F9F9',
      },
      error: {
        500: '#DF4848',
        400: '#E77373'
      },
      success: {
        500: '#4264DA',
      },
      review: '#FFD602',
      white: '#FFFFFF',
      black: '#000000',
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      screens: {
        desktop: '1280px',
      },
      extend: {
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'gradient-conic':
            'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        },
      },
    },
    plugins: [],
  },
};
