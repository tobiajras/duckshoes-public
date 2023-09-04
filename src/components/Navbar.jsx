import { useState, useEffect, useContext } from 'react';

import { Link, useNavigate, useLocation } from 'react-router-dom';

import { RiShoppingBagLine } from 'react-icons/ri';
import { HiMenu } from 'react-icons/hi';
import { TiTimes } from 'react-icons/ti';
import { IoLocationSharp } from 'react-icons/io5';

import NavbarMenu from './NavbarMenu';
import CartMenu from './CartMenu';
import { AppContext } from '../context/AppProvider';

function Navbar() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const q = searchParams.get('q');

  const [inputSearch, setInputSearch] = useState(q ?? '');
  const [navbarMenu, setNavbarMenu] = useState(false);
  const [cartMenu, setCartMenu] = useState(false);
  const [logMenu, setLogMenu] = useState(false);

  const navigate = useNavigate();

  const { user, setUser, cart } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/products?q=${inputSearch}&page=1`);
  };

  useEffect(() => {
    if (q !== inputSearch) {
      setInputSearch('');
    }
  }, [q]);

  const handleMenu = () => {
    setCartMenu(false);
    setNavbarMenu(!navbarMenu);
  };

  const handleCart = () => {
    setNavbarMenu(false);
    setCartMenu(!cartMenu);
  };

  return (
    <header className=' flex flex-col justify-center bg-background px-3 h-20 md:h-24 fixed w-full z-40 sm:px-5 '>
      <CartMenu cartMenu={cartMenu} setCartMenu={setCartMenu} />
      <nav className='flex gap-x-3 sm:gap-x-5 md:gap-x-10 sm:gap-y-2 w-full items-center lg:max-w-6xl mx-auto gridNavbar h-full md:py-3'>
        <div className=''>
          <Link to='/'>
            <h3 className='text-white font-semibold w-full flex text-lg gap-2 sm:text-2xl'>
              <span>Duck</span>
              <span>Shoes</span>
            </h3>
          </Link>
        </div>
        <form className='w-full flex' onSubmit={handleSubmit}>
          <input
            onClick={() => {
              setCartMenu(false), setNavbarMenu(false);
            }}
            className='align-middle outline-none border-none rounded p-1 px-2 w-full sm:max-w-md md:max-w-lg sm:text-xl'
            type='text'
            placeholder='search product...'
            value={inputSearch}
            onChange={(e) => setInputSearch(e.target.value)}
          />
        </form>
        <div className='flex items-center gap-3 text-3xl justify-end'>
          <div></div>
          <button onClick={handleCart}>
            {cartMenu ? (
              <TiTimes className='text-white' />
            ) : (
              <div className='relative'>
                <RiShoppingBagLine className='text-white' />
                {cart.length > 0 && (
                  <span className='text-base font-bold absolute -bottom-2 -right-2 bg-primaryLight rounded-full w-6 h-6 flex justify-center items-center '>
                    {cart.length}
                  </span>
                )}
              </div>
            )}
          </button>
          <button onClick={handleMenu}>
            {navbarMenu ? (
              <TiTimes className='text-white md:hidden' />
            ) : (
              <HiMenu className='font-bold text-white md:hidden' />
            )}
          </button>
        </div>
        <div className='text-sm sm:text-base text-white hidden md:flex items-center gap-1'>
          <IoLocationSharp />
          <h5>Buenos Aires</h5>
        </div>
        <div className='hidden md:block'>
          <NavbarMenu
            navbarMenu={navbarMenu}
            setNavbarMenu={setNavbarMenu}
            setCartMenu={setCartMenu}
          />
        </div>
        <div className='hidden'></div>
      </nav>
      <div className='md:hidden'>
        <NavbarMenu
          navbarMenu={navbarMenu}
          setNavbarMenu={setNavbarMenu}
          setCartMenu={setCartMenu}
        />
      </div>
    </header>
  );
}

export default Navbar;
