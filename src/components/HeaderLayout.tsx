import React from 'react';
import { Grid } from '@mui/material';
import { NavLink, Outlet } from 'react-router-dom';
import { RCLogo } from './RCLogo';

function HeaderLayout() {
  return (
    <Grid container alignItems='center'>
      <Grid item>
        <NavLink to='/'>
          <RCLogo />
        </NavLink>
      </Grid>

      <Grid item sx={{ marginLeft: 'auto' }}>
        <Outlet />
      </Grid>
    </Grid>
  );
}

export default HeaderLayout;
