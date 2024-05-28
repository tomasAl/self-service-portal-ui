import React, { useContext } from 'react';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import { Avatar, Badge, Button, Card, List, ListItem, Popper, Typography } from "@mui/material";
import { CartContext } from '../contexts/CartContext';
import themePalette from '../theme/themePalette';

function UserCart() {
  const { itemCount, cart, clearCart } = useContext(CartContext);

  const [anchor, setAnchor] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchor(anchor ? null : event.currentTarget);
  };

  const handleClearCart = () => {
    setAnchor(undefined);
    clearCart();
  };

  const open = Boolean(anchor && !!cart?.length);

  return (
    <>
      <Button
        variant='text'
        component='button'
        onClick={handleClick}
        disabled={!cart?.length}
      >
        <Badge badgeContent={itemCount} color='primary'>
          <ShoppingBasketOutlinedIcon />
        </Badge>
      </Button>

      <Popper open={open} anchorEl={anchor} sx={{ zIndex: '1100' }}>
        <Card sx={{ px: 1.5, py: 1}}>
          <List>
            {cart?.map((item) => (
              <ListItem key={item} disablePadding sx={{ mb: 2 }}>
                <Avatar sx={{ bgcolor: themePalette.palette.primary.main, mr: 0.5, height: 24, width: 24 }}>{item[0]}</Avatar>
                <Typography>{item}</Typography>
              </ListItem>
            ))}
            <ListItem disablePadding sx={{ justifyContent: 'center', pt: 1, width: '100%' }}>
              <Button
                component='button'
                onClick={() => handleClearCart()}
                size='small'
                color='error'
                variant='text'
              >Išvalyti krepšelį</Button>
            </ListItem>
          </List>
        </Card>
      </Popper>
    </>
  )
}

export default UserCart;
