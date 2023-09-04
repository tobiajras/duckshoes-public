import { BsCashStack } from 'react-icons/bs';
import { BsCreditCard } from 'react-icons/bs';
import { AiOutlineBank } from 'react-icons/ai';
import { LiaPaypal } from 'react-icons/lia';
import { BiWallet } from 'react-icons/bi';

function PaymentMethods() {
  return (
    <section className='md:flex md:mr-36'>
      <div className=''>
        <h3 className='font-bold text-lg mb-3 sm:mb-5 sm:text-3xl'>
          Payment Methods
        </h3>
        <p className='md:text-lg'>
          At Duck Shoes, we strive to provide our valued customers with a wide
          range of payment options to cater to your preferences. Here are the
          available payment methods:
        </p>
        <div className='my-3 sm:my-5 text-lg'>
          <div className='flex items-center gap-3 '>
            <span className='bg-white p-2.5 rounded-full ring-2 ring-primaryDark'>
              <BsCashStack className='text-3xl fill-primaryDark' />
            </span>
            <h5 className='font-semibold'>Cash</h5>
          </div>
          <p className='mt-2 opacity-75'>
            For those who prefer paying in cash, we offer the option to pay in
            person when you receive your order. Please have the exact amount
            ready for our delivery team to ensure a smooth transaction.
          </p>
        </div>
        <div className='my-3 sm:my-5 text-lg'>
          <div className='flex items-center gap-3 '>
            <span className='bg-white p-2.5 rounded-full ring-2 ring-primaryDark'>
              <BsCreditCard className='text-3xl fill-primaryDark' />
            </span>
            <h5 className='font-semibold'>Credit or Debit Card</h5>
          </div>
          <p className='mt-2 opacity-75'>
            You can securely enter your card details for a quick and hassle-free
            transaction. This method is ideal for those who wish to make
            efficient online payments.
          </p>
        </div>
        <div className='my-3 sm:my-5 text-lg'>
          <div className='flex items-center gap-3 '>
            <span className='bg-white p-2.5 rounded-full ring-2 ring-primaryDark'>
              <LiaPaypal className='text-3xl fill-primaryDark' />
            </span>
            <h5 className='font-semibold'>PayPal</h5>
          </div>
          <p className='mt-2 opacity-75'>
            Use your PayPal account for a seamless payment experience. PayPal is
            known for its security and user-friendliness, making it an excellent
            choice for online shoppers.
          </p>
        </div>
        <div className='my-3 sm:my-5 text-lg'>
          <div className='flex items-center gap-3 '>
            <span className='bg-white p-2.5 rounded-full ring-2 ring-primaryDark'>
              <AiOutlineBank className='text-3xl fill-primaryDark' />
            </span>
            <h5 className='font-semibold'>Bank Transfer</h5>
          </div>
          <p className='mt-2 opacity-75'>
            If you prefer to make a bank transfer, select this option and follow
            the provided instructions. It's a suitable choice for those who want
            to make payments directly from their bank accounts.
          </p>
        </div>
        <div className='my-3 sm:my-5 text-lg'>
          <div className='flex items-center gap-3 '>
            <span className='bg-white p-2.5 rounded-full ring-2 ring-primaryDark'>
              <BiWallet className='text-3xl fill-primaryDark' />
            </span>
            <h5 className='font-semibold'>Digital Wallets</h5>
          </div>
          <p className='mt-2 opacity-75'>
            We also accept various digital wallets like Apple Pay and Google Pay
            to offer you added convenience. Link your preferred digital wallet
            and make quick and secure payments.
          </p>
        </div>
      </div>
    </section>
  );
}

export default PaymentMethods;
