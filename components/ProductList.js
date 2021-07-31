import Link from "next/link";

import Product from "./Product";

export default function ProductList({ products }) {
  if (!products) return null;

  return (
    <div className="products-list flex flex-wrap -mx-4">
      {products.map((product) => (
        <div key={product.permalink} className="product-grid xl:w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2 w-full px-4 mb-12">
          <Link href={`/products/${product.permalink}`}>
            <a>
              <Product {...product} />
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}
