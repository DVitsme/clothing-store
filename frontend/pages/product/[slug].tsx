import { useQuery } from 'urql';
import { useRouter } from 'next/router';
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';

import { GET_PRODUCT_QUERY } from '../../lib/query';
import { useStateContext } from '../../lib/context';

export default function ProductDetails() {
  const { query } = useRouter();

  const { quantity, increaseQuantity, decreaseQuantity } = useStateContext();

  // fetch data
  const [results] = useQuery({
    query: GET_PRODUCT_QUERY,
    variables: { slug: query.slug }
  });

  const { data, fetching, error } = results;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>oh no...{error.message}</p>;

  const product = data.products.data[0].attributes;

  return (
    <div className="bg-white">
      <div className="mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        {/* Product */}
        <div className="lg:grid lg:grid-rows-1 lg:grid-cols-7 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
          {/* Product image */}
          <div className="lg:row-end-1 lg:col-span-4">
            <div className="rounded-lg overflow-hidden">
              <img
                src={product.image.data.attributes.formats.small.url}
                alt={product.title}
                className="object-center object-cover w-full"
              />
            </div>
          </div>

          {/* Product details */}
          <div className="max-w-2xl mx-auto mt-14 sm:mt-16 lg:max-w-none lg:mt-0 lg:row-end-2 lg:row-span-2 lg:col-span-3">
            <div className="flex flex-col-reverse">
              <div className="mt-4">
                <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                  {product.title}
                </h1>

                <h2 id="information-heading" className="sr-only">
                  Product information
                </h2>
                <p className="text-sm text-gray-500 mt-2">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Reiciendis, repudiandae.
                </p>
              </div>
            </div>

            <p className="text-gray-500 mt-6">{product.description}</p>

            <div className="mt-5 w-full">
              <div className="mb-5 flex text-base w-1/4 justify-between items-center">
                <p className="text-base text-gray-700">Quantity</p>
                <button>
                  <AiFillMinusCircle onClick={decreaseQuantity} />
                </button>
                <p>{quantity}</p>
                <button>
                  <AiFillPlusCircle onClick={increaseQuantity} />
                </button>
              </div>
              <button
                type="button"
                className="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
              >
                Buy: {quantity} for ${product.price * quantity}
              </button>
            </div>

            <div className="border-t border-gray-200 mt-10 pt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>
              <div className="mt-4 prose prose-sm text-gray-500">
                <ul role="list">
                  <li>highlight</li>
                  <li>highlight</li>
                  <li>highlight</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
