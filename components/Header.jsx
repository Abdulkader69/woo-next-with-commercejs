// import React, { useContext } from "react";
// import { CartProvider } from "../context/cart";

const Header = () => {
//   const [state] = useContext(CartProvider);

  return (
    <header id="main-header" className="py-4">
      <div className="container">
        <div className="flex flex-wrap">
          {/* <span>{state ? state.length : 0}</span> */}
          <div className="w-1/4"><img className="w-[70px]" src="https://www.abdulkader.me/images/logo.png" alt="" /></div>
          <div className="w-9/12">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/cart">Cart</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
