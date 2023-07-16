import React from 'react';
import { Link } from 'react-router-dom';

import { AiFillHome } from 'react-icons/ai';
import { RiShoppingBagFill } from 'react-icons/ri';
import { PiSneakerFill } from 'react-icons/pi';
import { MdAccountCircle } from 'react-icons/md';
import { MdFavorite } from 'react-icons/md';
import { BiSolidHelpCircle } from 'react-icons/bi';

import { motion } from 'framer-motion';

function NavbarMenu({ navbarMenu, setNavbarMenu }) {
  const menuVariants = {
    active: { opacity: 0.4 },
    inactive: { opacity: 0 },
  };

  const navbarMenuVariants = {
    active: { x: 0 },
    inactive: { x: '100%' },
  };

  return (
    <div onBlur={() => setNavbarMenu(false)} tabIndex={0}>
      <motion.ul
        initial="inactive"
        animate={!navbarMenu ? 'inactive' : 'active'}
        variants={navbarMenuVariants}
        transition={{ duration: 0.3 }}
        className="absolute top-14 right-0 z-40 w-1/2 h-screen drop-shadow-md p-3 bg-white text-xl flex flex-col"
      >
        <li>
          <Link
            to="/"
            onClick={() => setNavbarMenu(false)}
            onBlur={() => setNavbarMenu(false)}
            className="flex gap-2 items-center p-2"
          >
            <AiFillHome className="fill-background" />
            <h5 className="text-background font-bold">Home</h5>
          </Link>
        </li>
        <li>
          <Link
            to="/products"
            onClick={() => setNavbarMenu(false)}
            className="flex gap-2 items-center p-2"
          >
            <PiSneakerFill className="fill-background" />
            <h5 className="text-background font-bold">Products</h5>
          </Link>
        </li>
        <li>
          <Link
            to="/favorites"
            onClick={() => setNavbarMenu(false)}
            className="flex gap-2 items-center p-2"
          >
            <MdFavorite className="fill-background" />
            <h5 className="text-background font-bold">Favorites</h5>
          </Link>
        </li>
        <li>
          <Link
            to="/cart"
            onClick={() => setNavbarMenu(false)}
            className="flex gap-2 items-center p-2"
          >
            <RiShoppingBagFill className="fill-background" />
            <h5 className="text-background font-bold">Cart</h5>
          </Link>
        </li>
        <li>
          <Link
            to="/login"
            onClick={() => setNavbarMenu(false)}
            className="flex gap-2 items-center p-2"
          >
            <MdAccountCircle className="fill-background" />
            <h5 className="text-background font-bold">Login</h5>
          </Link>
        </li>
        <li>
          <Link
            to="/help"
            onClick={() => setNavbarMenu(false)}
            className="flex gap-2 items-center p-2"
          >
            <BiSolidHelpCircle className="fill-background" />
            <h5 className="text-background font-bold">Help</h5>
          </Link>
        </li>
      </motion.ul>
      <motion.div
        initial="inactive"
        animate={!navbarMenu ? 'inactive' : 'active'}
        variants={menuVariants}
        transition={{ duration: 0.3 }}
        className={`absolute bg-black h-screen w-screen top-14 left-0 ${
          !navbarMenu && 'pointer-events-none'
        }`}
        onClick={() => setNavbarMenu(false)}
      ></motion.div>
    </div>
  );
}

export default NavbarMenu;
