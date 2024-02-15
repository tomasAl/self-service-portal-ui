import React from 'react';
import { Button, Stack } from '@mui/material';
import { NavLink } from 'react-router-dom';
import UserCart from './UserCart';
import UserProfile from './UserProfile';

function Header() {
  return (
    <Stack direction='row' spacing={1}>
      <Button component={NavLink} sx={{ lineHeight: 1 }} to='/demo-paslaugos/react'>
        React demo
        <br />
        paslauga
      </Button>

      <Button component={NavLink} sx={{ lineHeight: 1 }} to='/demo-paslaugos/angular'>
        Angular demo
        <br />
        paslauga
      </Button>

      <Button component={NavLink} sx={{ lineHeight: 1 }} to='/demo-paslaugos/vue'>
        Vue demo
        <br />
        paslauga
      </Button>

      <UserCart />

      <UserProfile />
    </Stack>
  );
}

export default Header;
