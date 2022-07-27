import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#25C685'
    },
    secondary: {
      main: '#FFFFFF'
    },
    red: {
      main: '#FF464F',
      second: '#FF565E',
      disabled: '#FFE5E7',
      dark: '#623A42'
    },
    orange: {
      main: '#FF8A34',
      second: '#FF974A',
      disabled: '#FFEFE3',
      dark: '#624D3B'
    },
    yellow: {
      main: '#FFBC25',
      second: '#FFC542',
      disabled: '#FEF3D9',
      dark: '#625B39'
    },
    green: {
      main: '#25C685',
      second: '#3DD598',
      disabled: '#D4F5E9',
      dark: '#286053'
    },
    blue: {
      main: '#005DF2',
      second: '#0062FF',
      disabled: '#E3EEFF',
      dark: '#163E72'
    },
    purple: {
      main: '#6952DC',
      second: '#755FE2',
      disabled: '#EDEAFD',
      dark: '#393D69'
    },
    darkGreen: {
      main: '#1A3B34',
      second: '#899A96'
    },
    darkBlue: {
      main: '#30444E'
    },
    white: {
      main: '#FFFFFF',
      second: '#E4E9F3'
    },
    settings: {
      main: '#22343C',
      second: '#30444E'
    }
  },
  typography: {
    fontFamily: [
      'Robotto',
      'monospace',
      'Mplus1p',
      'Kosugi Maru',
      'Josefin Sans'
    ].join(','),
    fontSize: 14
  }
});

export default theme;
