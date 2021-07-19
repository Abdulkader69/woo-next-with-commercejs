import React from "react";

import commerce from "../../lib/commerce";
import ProductList from "../../components/ProductList";

export async function getStaticProps({ params }) {
  const { slug } = params;

  const category = await commerce.categories.retrieve(slug, {
    type: "slug",
  });

  const { data: products } = await commerce.products.list({
    category_slug: slug,
  });

  return {
    props: {
      category,
      products,
    },
  };
}

export async function getStaticPaths() {
  const { data: categories } = await commerce.categories.list();

  return {
    paths: categories.map((category) => ({
      params: {
        slug: category.slug,
      },
    })),
    fallback: false,
  };
}

export default function CategoryPage({ category, products }) {
  return (
    <>
      <div className="container">
        <h1 className="text-2xl uppercase pb-3 mb-7 border-b-2 border-solid border-black text-center">Category: {category.name}</h1>

        <ProductList products={products} />
      </div>
    </>
  );
}
