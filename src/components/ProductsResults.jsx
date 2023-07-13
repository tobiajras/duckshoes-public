import React, { useContext } from 'react';
import queryString from 'query-string';

import ProductCard from './ProductCard';
import { AppContext } from '../context/AppProvider';

function ProductsResults() {
  const { products } = useContext(AppContext);
  const { q } = queryString.parse(location.search);

  return (
    <>
      <h3 className="pt-2 mx-3 font-bold text-lg">Products results</h3>
      <section className="grid grid-cols-2 p-3 gap-3">
        {products.slice(0, 20).map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </section>
    </>
  );
}

export default ProductsResults;
