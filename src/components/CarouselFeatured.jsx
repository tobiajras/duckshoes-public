import { useContext } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { AppContext } from '../context/AppProvider';
import { Link } from 'react-router-dom';

import { MdFavoriteBorder } from 'react-icons/md';
import { AiOutlinePlusCircle } from 'react-icons/ai';

function CarouselFeatured({ from, to, title }) {
  const { products } = useContext(AppContext);
  const [emblaRef] = useEmblaCarousel({ dragFree: true });

  return (
    <section>
      <h3 className="mt-2 mx-3 font-bold text-lg">{title}</h3>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-3 m-3 ">
          {products.slice(from, to).map((product) => (
            <Link
              to={`/products/${product.name}`}
              className="w-full flex-[0_0_43%] p-3 drop-shadow-md bg-white rounded-md"
              key={product.id}
            >
              <img
                className="w-full"
                src={product.grid_picture_url}
                alt={product.name}
              />
              <h3 className="line-clamp-2 h-12">{product.name}</h3>
              <div className="flex justify-between mt-1 items-center">
                <strong>${product.retail_price_cents / 100}</strong>
                <div className="flex gap-2">
                  <MdFavoriteBorder />
                  <AiOutlinePlusCircle />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CarouselFeatured;
