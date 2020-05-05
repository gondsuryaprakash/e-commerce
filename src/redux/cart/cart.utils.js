export const addItemCart = (cartItems, cartItemToAdds) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdds.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdds.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...cartItemToAdds, quantity: 1 }];
};
