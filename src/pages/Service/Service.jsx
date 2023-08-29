import { Routes, Route, Outlet, Link } from 'react-router-dom';
import HowToBuy from './HowToBuy';
import HowWeDeliver from './HowWeDeliver';
import PaymentMethods from './PaymentMethods';

function Service() {
  return (
    <section className='md:flex gap-3 md:gap-5 m-3 sm:m-5 max-w-6xl'>
      <article className='w-60 hidden md:block bg-white p-3 md:p-5 rounded-md'>
        <h4>Service</h4>
        <ul className='flex flex-col'>
          <Link to='/service/how-to-buy'>How to buy</Link>
          <Link to='/service/how-we-deliver'>How we deliver</Link>
          <Link to='/service/payment-methods'>Payment methods</Link>
        </ul>
      </article>
      <article className='w-full flex justify-center bg-white rounded-md p-3 md:p-5'>
        <Routes>
          <Route index element={<HowToBuy />} />
          <Route index path='how-to-buy' element={<HowToBuy />} />
          <Route path='how-we-deliver' element={<HowWeDeliver />} />
          <Route path='payment-methods' element={<PaymentMethods />} />
        </Routes>
        <Outlet />
      </article>
    </section>
  );
}

export default Service;
