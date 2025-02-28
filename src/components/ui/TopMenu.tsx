'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoCloseOutline, IoMenuOutline } from 'react-icons/io5'; // Importamos íconos
import clsx from 'clsx'; // Para manejar clases condicionales
import { usePathname } from 'next/navigation';


const navLinks = [
  {
    path: '/home',
    name: 'Home'
  },

  {
    path: '/nosotros',
    name: 'Nosotros'
  },

  {
    path: '/servicios',
    name: 'Servicios'
  },

  {
    path: '/contacto',
    name: 'Contacto'
  },
]


export const TopMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const pathname = usePathname()

  return (
    <nav className="flex justify-center h-[70px] border-b border-primary">
      <div className="grid grid-cols-4 w-full h-16 px-5 max-w-[1200px]">
        {/* Logo */}
        <div className="col-span-1 flex items-center">
          <Link href="/home">
            <span>
              <Image
                src="/logo.png"
                alt="Logo"
                width={200}
                height={200}
                className="h-15 w-auto"
              />
            </span>
          </Link>
        </div>

        {/* Nav Links for Desktop */}
        <div className="hidden md:col-span-2 md:flex md:justify-center md:items-center md:gap-10">
          {
            navLinks.map(i => (
              <Link href={i.path} key={i.path} onClick={toggleMenu}>
                <span 
                  className={` text-primary hover:text-amber-700 transition-colors ${ i.path == pathname ? 'font-extrabold' : ''}`}>
                  { i.name}
                </span>
              </Link>
            ))
          }


        </div>

        {/* Toggle Button for Mobile */}
        <div className="col-span-3 flex justify-end items-center md:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            {isOpen ? (
              <IoCloseOutline size={24} /> // Ícono de cerrar
            ) : (
              <IoMenuOutline size={24} /> // Ícono de menú
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={clsx(
          'md:hidden fixed top-[70px] left-0 w-full h-[calc(100vh+80px)] bg-white z-20 shadow-2xl transform transition-all duration-300 ease-in-out',
          {
            'translate-x-0': isOpen, // Menú visible
            '-translate-x-full': !isOpen, // Menú oculto
          }
        )}
      >
        <div className="flex flex-col gap-5 !pt-5 !pl-10">
        {
            navLinks.map(i => (
              <Link href={i.path} key={i.path}>
                <span 
                  className={`text-xl  text-primary hover:text-amber-700 transition-colors ${ i.path == pathname ? 'font-extrabold' : ''}`}>
                  { i.name}
                </span>
              </Link>
            ))
          }
        </div>
      </div>

      {/* Background overlay */}
      {isOpen && (
        <div
          className="fixed top-[80px] left-0 w-full h-[calc(100vh-80px)] bg-black opacity-30 z-10"
          onClick={toggleMenu}
        />
      )}
    </nav>
  );
};

