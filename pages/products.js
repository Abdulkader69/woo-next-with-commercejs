import React from "react";

import commerce from "../lib/commerce";
import ProductList from "../components/ProductList";

export async function getStaticProps() {
  const { data: products } = await commerce.products.list();

  return {
    props: {
      products,
    },
  };
}

export default function ProductsPage({ products }) {
  return (
    <>
      <div className="container pt-10">
        <h1 className="text-2xl pb-3 mb-7 border-b-2 border-solid border-black text-center">
          All Products
        </h1>

        <ProductList products={products} />
      </div>
    </>
  );
}
