import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback } from 'react';

function CarouselBrands() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className='flex justify-center items-center'>
      <div ref={emblaRef} className='overflow-hidden max-w-6xl mx-3 sm:mx-10'>
        <div className='flex gap-10'>
          <div className='flex items-center justify-center gap-10 flex-[0_0_100%]'>
            <div className='w-24 h-24'>
              <img
                className='w-full h-full'
                src='/assets/brands/champion.svg'
                alt='champion logo'
              />
            </div>
            <div className='w-24 h-24'>
              <img
                className='w-full h-full'
                src='/assets/brands/nike.svg'
                alt='nike logo'
              />
            </div>
            <div className='w-24 h-24'>
              <img
                className='w-full h-full'
                src='/assets/brands/fila.svg'
                alt='fila logo'
              />
            </div>
            <div className='w-24 h-24'>
              <img
                className='w-full h-full'
                src='/assets/brands/converse.svg'
                alt='converse logo'
              />
            </div>
            <div className='w-24 h-24'>
              <img
                className='w-full h-full'
                src='/assets/brands/gucci.svg'
                alt='gucci logo'
              />
            </div>
            <div className='w-24 h-24'>
              <img
                className='w-full h-full'
                src='/assets/brands/offwhite.svg'
                alt='offwhite logo'
              />
            </div>
          </div>
          <div className='flex items-center justify-center gap-10 flex-[0_0_100%]'>
            <div className='w-24 h-24'>
              <img
                className='w-full h-full'
                src='/assets/brands/newbalance.svg'
                alt='newbalance logo'
              />
            </div>
            <div className='w-24 h-24'>
              <img
                className='w-full h-full'
                src='/assets/brands/adidas.svg'
                alt='adidas logo'
              />
            </div>
            <div className='w-24 h-24'>
              <img
                className='w-full h-full'
                src='/assets/brands/vans.svg'
                alt='vans logo'
              />
            </div>
            <div className='w-24 h-24'>
              <img
                className='w-full h-full'
                src='/assets/brands/puma.svg'
                alt='puma logo'
              />
            </div>
            <div className='w-24 h-24'>
              <img
                className='w-full h-full'
                src='/assets/brands/underarmour.svg'
                alt='underarmour logo'
              />
            </div>
            <div className='w-24 h-24'>
              <img
                className='w-full h-full'
                src='/assets/brands/dc.svg'
                alt='dc logo'
              />
            </div>
          </div>
        </div>
        <button onClick={scrollPrev}>Prev</button>
        <button onClick={scrollNext}>Next</button>
      </div>
    </div>
  );
}

export default CarouselBrands;
