import Link from 'next/link';

import { HiOutlineShoppingBag } from 'react-icons/hi';

import { useStateContext } from '../../lib/context';

const Cart = () => {
  const { cartItems } = useStateContext();

  return (
    <div className="ml-4 flow-root lg:ml-8">
      <Link href="/">
        <a className="group -m-2 p-2 flex items-center rounded hover:bg-indigo-50 hover:mb-0.5">
          <HiOutlineShoppingBag
            className="flex-shrink-0 h-6 w-6 text-blue-600 hover:text-blue-800"
            aria-hidden="true"
          />
          <span className="ml-2 text-sm font-medium text-blue-600">0</span>
          <span className="sr-only">items in cart, view bag</span>
        </a>
      </Link>
    </div>
  );
};

export default Cart;
