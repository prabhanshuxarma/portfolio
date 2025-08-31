'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SkinToggle from './SkinToggle';


const navItems = [
  { href: '/about', label: 'About' },
  { href: '/work', label: 'Work' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className='flex max-w-7xl mx-auto bg-white justify-end items-center gap-5 px-7 lg:px-14'>
      <nav className="shadow-sm my-5 rounded-full inline-flex justify-center gap-6 px-6 border border-gray-100">
        {navItems.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`text-sm font-medium py-3 px-1 hover:text-teal-500 transition-all ${
              pathname === href ? 'text-teal-500' : 'text-gray-700'
            }`}
          >
            {label}
          </Link>
        ))}
       
      </nav>
       <SkinToggle/>
    </header>
  );
}
