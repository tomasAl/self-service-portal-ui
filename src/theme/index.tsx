// import '@fontsource/source-sans-pro/400.css';
// import '@fontsource/source-sans-pro/600.css';
// import '@fontsource/source-sans-pro/700.css';
import { createTheme } from '@mui/material';
import themePalette from './themePalette';
import MuiButton from './MuiButton';

const theme = createTheme(themePalette, {
  components: {
    MuiButton,
  },
});

export default theme;
