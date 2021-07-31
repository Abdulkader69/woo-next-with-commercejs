import Link from "next/link";

import Category from "./Category";

export default function CategoryList({ categories }) {
  if (!categories) return null;

  return (
    <ul>
      {categories.map((category) => (
        <li key={category.slug} className="border-b-2 border-solid border-gray-400 mb-2">
          <Link href={`/categories/${category.slug}`}>
            <a className="py-1 inline-block">
              <Category {...category} />
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
