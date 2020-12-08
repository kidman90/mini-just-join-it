export const getOffers = () =>
  fetch('https://test.justjoin.it/offers').then((response) => response.json());
