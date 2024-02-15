import React, { useContext } from 'react';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Button, Card, Popper } from "@mui/material";
import { UserContext } from '../contexts/UserContext';

function UserCart() {
  const { user } = useContext(UserContext);

  const [anchor, setAnchor] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchor(anchor ? null : event.currentTarget);
  };

  if (!user) return null;

  return (
    <>
      <Button
        variant='text'
        component='button'
        onClick={handleClick}
      >
        <AccountCircleOutlinedIcon />
      </Button>

      <Popper open={!!anchor} anchorEl={anchor}>
        <Card sx={{ px: 1.5, py: 1}}>
          {user.name} {user.last_name}
        </Card>
      </Popper>
    </>
  )
}

export default UserCart;
