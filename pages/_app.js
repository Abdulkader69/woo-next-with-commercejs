import { CartProvider } from "../context/cart";
import '../src/assets/css/Global.scss';
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MyApp({ Component, pageProps, router }) {
  const { route } = router;
  let bodyClassName = '';
  if (route === '/') {
    bodyClassName = 'home-page';
  } else if (route === '/products') {
    bodyClassName = 'products-page';
  } else if (route === '/categories') {
    bodyClassName = 'categories-page';
  } else if (route === '/categories/[slug]') {
    bodyClassName = 'products-category-page';
  } else if (route === '/products/[permalink]') {
    bodyClassName = 'products-single-page';
  }

  return (
    <CartProvider>
      <div id="page_container" className={`${bodyClassName} overflow-hidden pt-32`}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </CartProvider>
  );
}
