import { Components } from '@mui/material';

const MuiButton: Components['MuiButton'] = {
  defaultProps: {
    color: 'primary',
    disableElevation: true,
    variant: 'outlined',
  },
  styleOverrides: {
    root: {
      textAlign: 'center',
      textTransform: 'none',
    },
    contained: {
      fontSize: '1rem',
      lineHeight: '1.25rem',
      paddingBottom: '.5rem',
      paddingTop: '.5rem',
    },
  },
};

export default MuiButton;
