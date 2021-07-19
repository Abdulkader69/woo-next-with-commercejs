import React from "react";
import Link from "next/link";

import commerce from "../lib/commerce";
import CategoryList from "../components/CategoryList";
import ProductList from "../components/ProductList";

export async function getStaticProps() {
  const merchant = await commerce.merchants.about();
  const { data: categories } = await commerce.categories.list();
  const { data: products1 } = await commerce.products.list({
    category_slug: ["office"],
  });
  const { data: products2 } = await commerce.products.list({
    category_slug: ["accessories"],
  });

  return {
    props: {
      merchant,
      categories,
      products1,
      products2,
    },
  };
}

export default function IndexPage({ merchant, categories, products1, products2 }) {
  console.log(products1);
  return (
    <>
      <div className="container">
        <h1 className="text-4xl mt-10 mb-6 text-center">Niobium Shop</h1>

        {/* <h3>
          <Link href="/categories">
            <a>Categories</a>
          </Link>
        </h3>

        <CategoryList categories={categories} /> */}

        <h3 className="text-2xl uppercase pb-3 mb-7 border-b-2 border-solid border-black flex justify-between items-center">
          <span>Home office</span>
          <Link href="/categories/office">
            <a className="text-xl">View All</a>
          </Link>
        </h3>

        <ProductList products={products1} />


        <h3 className="text-2xl uppercase pb-3 mb-7 border-b-2 border-solid border-black flex justify-between items-center">
          <span>Accessories</span>
          <Link href="/categories/accessories">
            <a className="text-xl">View All</a>
          </Link>
        </h3>

        <ProductList products={products2} />
      </div>
    </>
  );
}
