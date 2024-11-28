export const getOrderId = (): string | undefined => {
  const urlParams = new URLSearchParams(window.location.search);

  const paramValue = urlParams.get('orderId');
  if (paramValue) return paramValue;

  return;
}
