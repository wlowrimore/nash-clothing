import {
  CartItemContainer,
  CartItemDetails,
  CartItemName,
} from "./cart-item.styles.jsx";

const CartItem = ({ cartItem: { name, imageUrl, price, quantity } }) => {
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
