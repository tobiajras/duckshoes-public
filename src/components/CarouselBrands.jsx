import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback } from 'react';

import { IoMdArrowRoundForward } from 'react-icons/io';
import { IoMdArrowRoundBack } from 'react-icons/io';

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
      <div className='flex justify-center items-center gap-3 md:gap-10 max-w-6xl mx-3 my-5 sm:mx-10 sm:my-10 md:my-16 md:mx-20 w-full'>
        <button
          className='flex justify-center items-center bg-white h-full rounded-full p-1 md:p-3 shadow-md'
          onClick={scrollPrev}
        >
          <IoMdArrowRoundBack className='md:w-8 md:h-8' />
        </button>
        <div ref={emblaRef} className='overflow-hidden'>
          <div className='flex gap-10'>
            <div className='flex items-center justify-center gap-4 sm:gap-10 md:gap-16 flex-[0_0_100%]'>
              <div className=''>
                <img
                  className='w-full'
                  src='/assets/brands/champion.svg'
                  alt='champion logo'
                />
              </div>
              <div className=''>
                <img
                  className='w-full'
                  src='/assets/brands/nike.svg'
                  alt='nike logo'
                />
              </div>
              <div className=''>
                <img
                  className='w-full'
                  src='/assets/brands/fila.svg'
                  alt='fila logo'
                />
              </div>
              <div className=''>
                <img
                  className='w-full'
                  src='/assets/brands/converse.svg'
                  alt='converse logo'
                />
              </div>
              <div className=''>
                <img
                  className='w-full'
                  src='/assets/brands/gucci.svg'
                  alt='gucci logo'
                />
              </div>
              <div className=''>
                <img
                  className='w-full'
                  src='/assets/brands/offwhite.svg'
                  alt='offwhite logo'
                />
              </div>
            </div>
            <div className='flex items-center justify-center gap-4 sm:gap-10 md:gap-16 flex-[0_0_100%]'>
              <div className=''>
                <img
                  className='w-full'
                  src='/assets/brands/newbalance.svg'
                  alt='newbalance logo'
                />
              </div>
              <div className=''>
                <img
                  className='w-full'
                  src='/assets/brands/adidas.svg'
                  alt='adidas logo'
                />
              </div>
              <div className=''>
                <img
                  className='w-full'
                  src='/assets/brands/vans.svg'
                  alt='vans logo'
                />
              </div>
              <div className=''>
                <img
                  className='w-full'
                  src='/assets/brands/puma.svg'
                  alt='puma logo'
                />
              </div>
              <div className=''>
                <img
                  className='w-full'
                  src='/assets/brands/underarmour.svg'
                  alt='underarmour logo'
                />
              </div>
              <div className=''>
                <img
                  className='w-full'
                  src='/assets/brands/dc.svg'
                  alt='dc logo'
                />
              </div>
            </div>
          </div>
        </div>
        <button
          className='flex justify-center items-center bg-white h-full rounded-full p-1 md:p-3 shadow-md'
          onClick={scrollNext}
        >
          <IoMdArrowRoundForward className='md:w-8 md:h-8' />
        </button>
      </div>
    </div>
  );
}

export default CarouselBrands;
