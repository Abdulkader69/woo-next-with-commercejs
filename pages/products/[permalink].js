import React from "react";

import commerce from "../../lib/commerce";
import { useCartDispatch } from "../../context/cart";
import parse from 'html-react-parser';

export async function getStaticProps({ params }) {
  const { permalink } = params;

  const product = await commerce.products.retrieve(permalink, {
    type: "permalink",
  });

  return {
    props: {
      product,
    },
  };
}

export async function getStaticPaths() {
  const { data: products } = await commerce.products.list();

  return {
    paths: products.map((product) => ({
      params: {
        permalink: product.permalink,
      },
    })),
    fallback: false,
  };
}

export default function ProductPage({ product }) {
  const { setCart } = useCartDispatch();

  const addToCart = () =>
    commerce.cart.add(product.id).then(({ cart }) => setCart(cart));

  console.log(product);
  
  return (
    <>
      <div className="container">
        <div className="single-product-wrapper flex flex-wrap -mx-4">
          <div className="w-6/12 px-4">
            <div className="product-thumbnail flex h-[500px] overflow-hidden">
              <img className="object-cover w-full" src={product.media.source} alt={product.name} />
            </div>
          </div>
          <div className="w-6/12 px-4">
            <h1 className="text-[35px] font-medium">{product.name}</h1>
            <p className="text-lg">{product.price.formatted_with_symbol}</p>
            <div className="description">
              {parse(product.description)}
            </div>
            <button onClick={addToCart}>Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
}
