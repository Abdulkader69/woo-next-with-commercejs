import { CartProvider } from "../context/cart";
import '../src/assets/css/Global.scss';

export default function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}
