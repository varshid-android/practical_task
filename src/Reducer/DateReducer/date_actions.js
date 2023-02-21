import date_types from './date_types';

export const likeANDdislike = id => ({
  type: date_types.LIKEITEM,
  id,
});
export const addToCart = id => ({
  type: date_types.ADDTOCART,
  id,
});
export const plusItem = id => ({
  type: date_types.PLUSITEM,
  id,
});
export const minusItem = id => ({
  type: date_types.MINUSITEM,
  id,
});
