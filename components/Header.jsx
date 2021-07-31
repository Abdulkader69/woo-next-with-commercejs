// import React, { useContext } from "react";
// import { CartProvider } from "../context/cart";

const Header = () => {
//   const [state] = useContext(CartProvider);

  return (
    <header id="main-header" className="fixed top-0 w-full z-50 bg-white">
      
      <div className="header-middle py-3">
        <div className="container">
          <div className="flex flex-wrap">
            {/* <span>{state ? state.length : 0}</span> */}
            <div className="w-1/4"><a href="/"><img className="w-20" src="https://www.abdulkader.me/images/logo.png" alt="" /></a></div>
            <div className="w-9/12">
              
            </div>
          </div>
        </div>
      </div>
      <div className="menu-area bg-gray-700">
        <div className="container">
          <ul className="flex items-center">
            <li className="inline-block bg-red-600 w-60 text-center"><a className="mx-5 px-4 py-2 inline-block text-white text-md uppercase" href="/">Categories</a></li>
            <li className="inline-block"><a className="mx-5 px-4 py-2 inline-block text-white uppercase hover:text-red-400 transition-all text-sm" href="/">Home</a></li>
            <li className="inline-block"><a className="mx-5 px-4 py-2 inline-block text-white uppercase  hover:text-red-400 transition-all text-sm" href="/products">All Shops</a></li>
            <li className="inline-block"><a className="mx-5 px-4 py-2 inline-block text-white uppercase  hover:text-red-400 transition-all text-sm" href="/products">Gift Card</a></li>
            <li className="inline-block"><a className="mx-5 px-4 py-2 inline-block text-white uppercase  hover:text-red-400 transition-all text-sm" href="/products">Campaigns</a></li>
            <li className="inline-block"><a className="mx-5 px-4 py-2 inline-block text-white uppercase  hover:text-red-400 transition-all text-sm" href="/products">Top-up</a></li>
            <li className="inline-block"><a className="mx-5 px-4 py-2 inline-block text-white uppercase  hover:text-red-400 transition-all text-sm" href="/cart">Cart</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
};
export default Header;
