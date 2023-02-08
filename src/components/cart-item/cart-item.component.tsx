import { FC } from "react";

import { CartItem as TCartItem } from "../../store/cart/cart.types";

import {
  CartItemContainer,
  CartItemDetails,
  CartItemName,
} from "./cart-item.styles";

type CartItemProps = {
  cartItem: TCartItem;
};

const CartItem: FC<CartItemProps> = ({
  cartItem: { name, imageUrl, price, quantity },
}) => {
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <CartItemDetails>
        <CartItemName>{name}</CartItemName>
        <CartItemName>
          {quantity} x ${price}{" "}
        </CartItemName>
      </CartItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
