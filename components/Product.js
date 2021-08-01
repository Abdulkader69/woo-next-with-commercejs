export default function Product({ name, price, media }) {
  return (
    <div className="product-grid-inner">
      <div className="thumbnail flex h-60 overflow-hidden">
        <img className="object-cover object-center w-full transition-all transform hover:scale-110" src={media.source} alt={name} />
      </div>
      <h3 className="text-xl mt-5 mb-2">{name}</h3>
      <p className="text-sm">{price.formatted_with_symbol}</p>
    </div>
  );
}
