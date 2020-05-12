import CartActionType from './cart.type';
export const toggleCardHidden = () => ({
  type: CartActionType.TOGGLE_CART_HIDDEN,
});
export const addItem = (item) => ({
  type: CartActionType.ADD_ITEM,
  payload: item,
});

export const clearItemFromCart = (item) => ({
  type: CartActionType.CLEAR_ITEM_FROM_CART,
  payload: item,
});
export const removeItem = (item) => ({
  type: CartActionType.REMOVE_ITEM,
  payload: item,
});
