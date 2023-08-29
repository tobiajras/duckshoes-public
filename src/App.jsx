import 'tailwindcss/tailwind.css';
import './app.css';

import { Routes, Route } from 'react-router-dom';

import { AppProvider } from './context/AppProvider';

import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import ProductDetails from './components/ProductDetails';
import Favorites from './pages/Favorites';
import NotFound404 from './pages/NotFound404';
import ScrollToTop from './helpers/ScrollToTop';
import Footer from './components/Footer';
import Payment from './pages/Payment';
import Service from './pages/Service/Service';

function App() {
  return (
    <div className='bg-body flex flex-col items-center font-outfit'>
      <ScrollToTop />
      <Newsletter />
      <AppProvider>
        <Navbar />
        <main className='flex flex-col box-border mt-20 min-h-screen bg-body w-full md:mt-24'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/products/:productName' element={<ProductDetails />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/payment' element={<Payment />} />
            <Route path='/service/*' element={<Service />} />
            <Route path='*' element={<NotFound404 />} />
          </Routes>
        </main>
        <Footer />
      </AppProvider>
    </div>
  );
}

export default App;
