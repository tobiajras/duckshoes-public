import { BsFillBagCheckFill } from 'react-icons/bs';
import { FaRegHandPointer } from 'react-icons/fa';
import { FaShippingFast } from 'react-icons/fa';
import { BiSupport } from 'react-icons/bi';
import { LuPackageOpen } from 'react-icons/lu';

function PaymentMethods() {
  return (
    <section className='md:flex md:mr-36'>
      <div className=''>
        <h3 className='font-bold text-lg mb-3 sm:mb-5 sm:text-3xl'>
          Payment Methods
        </h3>
        <p className='md:text-lg'>
          At Duck Shoes, we take pride in offering our valued customers a
          straightforward and secure shopping experience. Here's how you can
          purchase your favorite products quickly and easily.
        </p>
        <div className='flex items-center gap-3 my-3 sm:my-5 font-semibold text-lg'>
          <FaRegHandPointer className='text-5xl fill-primaryDark ' />
          <h5>Select Your Products</h5>
        </div>
        <div className='flex items-center gap-3 my-3 sm:my-5 font-semibold text-lg'>
          <BsFillBagCheckFill className='text-5xl fill-primaryDark' />
          <h5>Order Processing</h5>
        </div>
        <div className='flex items-center gap-3 my-3 sm:my-5 font-semibold text-lg'>
          <BiSupport className='text-5xl fill-primaryDark' />

          <h5>Shipping and Tracking</h5>
        </div>
        <div className='flex items-center gap-3 my-3 sm:my-5 font-semibold text-lg'>
          <FaShippingFast className='text-5xl fill-primaryDark' />
          <h5>Delivery</h5>
        </div>
        <div className='flex items-center gap-3 my-3 sm:my-5 font-semibold text-lg'>
          <LuPackageOpen className='text-5xl stroke-primaryDark' />
          <h5>Receive Your Order</h5>
        </div>
      </div>
    </section>
  );
}

export default PaymentMethods;
