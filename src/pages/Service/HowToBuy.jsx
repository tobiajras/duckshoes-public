import { BsCartCheck } from 'react-icons/bs';
import { FaRegHandPointer } from 'react-icons/fa';
import { FaShippingFast } from 'react-icons/fa';
import { BiSupport } from 'react-icons/bi';
import { LuPackageOpen } from 'react-icons/lu';

function HowToBuy() {
  return (
    <section className='md:flex md:mr-36'>
      <div className=''>
        <h3 className='font-bold text-lg mb-3 sm:mb-5 sm:text-3xl'>
          How to buy
        </h3>
        <p className='md:text-lg'>
          At Duck Shoes, we take pride in offering our valued customers a
          straightforward and secure shopping experience. Here's how you can
          purchase your favorite products quickly and easily.
        </p>
        <div className='my-3 sm:my-5 text-lg'>
          <div className='flex items-center gap-3 '>
            <span className='bg-white p-2.5 rounded-full ring-2 ring-primaryDark'>
              <FaRegHandPointer className='text-3xl fill-primaryDark' />
            </span>
            <h5 className='font-semibold'>Select Your Products</h5>
          </div>
          <p className='mt-2 opacity-75'>
            Browse our website, choose the items you want, and add them to your
            shopping cart. Then, proceed to the checkout process and enter your
            shipping and contact information.
          </p>
        </div>
        <div className='my-3 sm:my-5 text-lg'>
          <div className='flex items-center gap-3 '>
            <span className='bg-white p-2.5 rounded-full ring-2 ring-primaryDark'>
              <BsCartCheck className='text-3xl fill-primaryDark' />
            </span>
            <h5 className='font-semibold'>Order Processing</h5>
          </div>
          <p className='mt-2 opacity-75'>
            Once we receive your order, our dedicated team springs into action.
            We carefully select and pack your items to ensure they arrive in
            perfect condition.
          </p>
        </div>
        <div className='my-3 sm:my-5 text-lg'>
          <div className='flex items-center gap-3 '>
            <span className='bg-white p-2.5 rounded-full ring-2 ring-primaryDark'>
              <BiSupport className='text-3xl fill-primaryDark' />
            </span>
            <h5 className='font-semibold'>Shipping and Tracking</h5>
          </div>
          <p className='mt-2 opacity-75'>
            We partner with trusted courier services to ensure efficient and
            timely deliveries. You will receive a tracking number to monitor the
            progress of your package until it reaches your doorstep.
          </p>
        </div>
        <div className='my-3 sm:my-5 text-lg'>
          <div className='flex items-center gap-3 '>
            <span className='bg-white p-2.5 rounded-full ring-2 ring-primaryDark'>
              <FaShippingFast className='text-3xl fill-primaryDark' />
            </span>
            <h5 className='font-semibold'>Delivery</h5>
          </div>
          <p className='mt-2 opacity-75'>
            Sit back and relax while our shipping partners work diligently to
            deliver your package to the address you provided. Timely deliveries
            are our priority.
          </p>
        </div>
        <div className='my-3 sm:my-5 text-lg'>
          <div className='flex items-center gap-3 '>
            <span className='bg-white p-2.5 rounded-full ring-2 ring-primaryDark'>
              <LuPackageOpen className='text-3xl stroke-primaryDark' />
            </span>
            <h5 className='font-semibold'>Receive Your Order</h5>
          </div>
          <p className='mt-2 opacity-75'>
            We hope you are delighted with your purchase. If any issues arise,
            our friendly customer support team is always ready to assist you.
            Your satisfaction is important to us.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowToBuy;
