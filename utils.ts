import { IOffer } from './interfaces';

export const getCategories = (offers: IOffer[]) =>
  offers.reduce((list, offer) => {
    if (!list.find((category) => category === offer.marker_icon)) {
      list.push(offer.marker_icon);
    }
    return list;
  }, [] as string[]);
