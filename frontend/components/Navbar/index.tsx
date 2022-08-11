import Link from 'next/link';
import Cart from '../Cart';
import CartDrawer from '../Cart/drawer';

const navigation = [
  { name: 'Dart Mart', href: '/' },
  { name: 'Products', href: '#' },
  { name: 'Contact', href: '#' }
];

export default function Navbar() {
  return (
    <header className="bg-transparent">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
          <div className="flex items-center">
            <div className="hidden space-x-8 lg:block">
              {navigation.map((link, index) => (
                <Link href={link.href} key={link.name}>
                  <a
                    className={`${
                      index === 0
                        ? 'font-bold text-xl'
                        : 'font-medium text-base'
                    } text-gray-700 hover:text-indigo-700`}
                  >
                    {link.name}
                  </a>
                </Link>
              ))}
            </div>
          </div>
          <div className="ml-10 space-x-4 flex items-center">
            <a
              href="#"
              className="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
            >
              Sign in
            </a>
            <a
              href="#"
              className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50"
            >
              Sign up
            </a>
            <Cart />
          </div>
          <CartDrawer />
        </div>
        <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
          {navigation.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-medium text-gray-700 hover:text-indigo-700"
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
