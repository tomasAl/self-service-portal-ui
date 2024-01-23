import { CART_LOCAL_STORAGE_KEY } from '../const/cart';

const getCartContentFromLocalStorage = (): string[] => {
  let currentCart: string[] = [];

  try {
    const value = localStorage.getItem(CART_LOCAL_STORAGE_KEY);

    if (typeof value === 'string') {
      currentCart = JSON.parse(value);
    }

    return currentCart;
  } catch {
    return currentCart;
  }
};

const addToCartLocalStorage = (service: string) => {
  const currentCart = getCartContentFromLocalStorage();

  if (!currentCart.includes(service)) {
    const updatedCart = [ ...currentCart, service ];
    localStorage.setItem(CART_LOCAL_STORAGE_KEY, JSON.stringify(updatedCart))
  }
};

export const addToCart = (service: string): void => {
  try {
    addToCartLocalStorage(service);
    window.dispatchEvent(new Event('cart'));
  } catch {}
};

export const getCartContent = (): string[] => {
  return getCartContentFromLocalStorage();
};

export const clearCart = (): void => {
  localStorage.setItem(CART_LOCAL_STORAGE_KEY, JSON.stringify([]));
  window.dispatchEvent(new Event('cart'));
};

export const removeFromCart = (service: string): void => null;
