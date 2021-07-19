import Link from "next/link";

import Product from "./Product";

export default function ProductList({ products }) {
  if (!products) return null;

  return (
    <div className="products-list flex flex-wrap -mx-4">
      {products.map((product) => (
        <div key={product.permalink} className="product-grid w-1/5 px-4 mb-[50px]">
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
