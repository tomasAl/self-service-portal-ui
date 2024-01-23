import { createTheme } from '@mui/material';

const themePalette = createTheme({
  palette: {
    text: {
      primary: '#333333',
    },
    primary: {
      main: '#3199b4',
    },
    secondary: {
      main: '#45ba8a',
    },
  },
  typography: {
    fontFamily: '"Source Sans Pro", -apple-system, sans-serif, Arial',
  },
});

export default themePalette;
