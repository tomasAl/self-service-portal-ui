declare module '@rc-ses/self-service-portal-ui-root' {
  import * as React from 'react'

  /*
   * Funkcija, skirta nukreipti naudotoją į savitarnos krepšelio puslapį.
   */
  export const redirectToCart: () => void;

  /*
   * Funkcija, skirta nukreipti naudotoją į viešojo portalo titulinį puslapį.
   */
  export const redirectToLanding: () => void;

  /*
   * Funkcija, skirta nukreipti naudotoją į savitarnos titulinį puslapį.
   */
  export const redirectToSelfServiceDashboard: () => void;

  /*
   * Funkcija, skirta nukreipti naudotoją į paslaugos aprašymo puslapį.
   */
  export const redirectToServiceDescriptionPage: (id: string) => void;

  /*
   * Funkcija, skirta nukreipti naudotoją į paslaugos aprašymo puslapį su klaidos pranešimu.
   */
  export const unsupportedServiceRedirect: (id: string, message: string) => void;
}
