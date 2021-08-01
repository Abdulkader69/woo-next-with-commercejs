import React from "react";
import Link from "next/link";
import Image from 'next/image'

import commerce from "../lib/commerce";
import CategoryList from "../components/CategoryList";
import ProductList from "../components/ProductList";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  largeDesktop: {
    breakpoint: { max: 5000, min: 1366 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  }
};

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
  console.log(merchant);
  return (
    <>
      <div className="container">
        <div className="home-banner-section flex flex-wrap mb-7 -mt-1">
          <div className="category-area w-60 bg-gray-100 p-4">
            <CategoryList categories={categories} />
            <CategoryList categories={categories} />
            <CategoryList categories={categories} />
          </div>
          <div className="banner-slider">
            {/* <img className="w-full" src="https://niobium.me/wp-content/uploads/2021/07/banner.png" /> */}
             <Carousel
                responsive={responsive}
                infinite
                autoPlay
                swipeable
                draggable
                arrows={false}
                showDots
             >
               <div className="item"><img className="pointer-events-none" src="https://niobium.me/wp-content/uploads/2021/07/banner.png" /></div>
               <div className="item"><img className="pointer-events-none" src="https://niobium.me/wp-content/uploads/2021/08/slide3.jpg" /></div>
               <div className="item"><img className="pointer-events-none" src="https://niobium.me/wp-content/uploads/2021/08/slide2.jpg" /></div>
             </Carousel>
          </div>
        </div>

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
