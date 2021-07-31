import { useCartDispatch, useCartState } from "../context/cart";

import commerce from "../lib/commerce";

function CartItem({ id, name, quantity, line_total, media }) {
  const { setCart } = useCartDispatch();

  const handleUpdateCart = ({ cart }) => setCart(cart);

  const removeItem = () => commerce.cart.remove(id).then(handleUpdateCart);

  const decrementQuantity = () => {
    quantity > 1
      ? commerce.cart
          .update(id, { quantity: quantity - 1 })
          .then(handleUpdateCart)
      : removeItem();
  };

  const incrementQuantity = () =>
    commerce.cart.update(id, { quantity: quantity + 1 }).then(handleUpdateCart);

  return (
    <div className="product-cart-item">
      <div className="flex items-center py-4 border-b-2 border-solid border-gray-100">
        <div className="name w-96"><div className="flex items-center"> <div className="thumbnail mr-4 flex h-24 w-28"><img className="w-full object-cover" src={media.source} alt="" /></div> <p>{name}</p></div></div>
        <div className="variation w-72"><p></p></div>
        <div className="quantity w-96 flex"><button onClick={decrementQuantity}>-</button><p>{quantity}</p><button onClick={incrementQuantity}>+</button></div>
        <div className="total-price w-32"><p>{line_total.formatted_with_symbol}</p></div>
        <div className="remove-product w-20"><button onClick={removeItem}>&times;</button></div>
      </div>
      {/* <p></p>
      <p>{quantity}</p>
      <p>{line_total.formatted_with_symbol}</p>
      <div>
        <button onClick={decrementQuantity}>-</button>
        <button onClick={incrementQuantity}>+</button>
      </div>
      <button onClick={removeItem}>&times;</button> */}
    </div>
  );
}

export default function CartPage() {
  const { line_items, subtotal } = useCartState();
  console.log(line_items);

  const isEmpty = line_items.length === 0;

  if (isEmpty) return (
    <div className="container pt-10">
      <h1 className="text-2xl pb-3 mb-7 border-b-2 border-solid border-black text-center">
        Your Bag
      </h1>

      <p>Your Bag is empty</p>
    </div>
  );

  return (
    <div className="container pt-10">
      <h1 className="text-2xl pb-3 mb-7 border-b-2 border-solid border-black text-center">
        Your Bag
      </h1>

      <div className="bag-details-bar flex items-center pb-1 border-b-2 border-solid border-gray-100">
        <div className="name w-96"><p>Product</p></div>
        <div className="variation w-72"><p>Variation</p></div>
        <div className="quantity w-96"><p>Quantity</p></div>
        <div className="total-price w-32"><p>Total Price</p></div>
        <div className="remove-product w-20"></div>
      </div>
      {line_items.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
      <strong>Sub total:</strong> {subtotal.formatted_with_symbol}
    </div>
  );
}
