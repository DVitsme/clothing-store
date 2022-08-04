/* This example requires Tailwind CSS v2.0+ */
export default function SummerSale() {
  return (
    <div className="bg-white relative overflow-hidden">
      {/* Decorative background image and gradient */}
      {/* <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute inset-0 max-w-full mx-auto overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1607465061886-b99e5ccebb9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1136&q=80"
            alt=""
            className="w-full h-full object-center object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-white bg-opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white" />
      </div> */}

      {/* Callout */}
      <section
        aria-labelledby="sale-heading"
        className="relative max-w-7xl mx-auto pt-16 px-4 flex flex-col items-center text-center sm:px-6 lg:px-8"
      >
        <div className="max-w-2xl mx-auto lg:max-w-none">
          <h2
            id="sale-heading"
            className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
          >
            Get 25% off during our one-time sale
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-xl text-gray-600">
            Most of our products are limited releases that won't come back. Get
            your favorite items while they're in stock.
          </p>
          <a
            href="#"
            className="mt-6 inline-block w-full bg-gray-900 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-gray-800 sm:w-auto"
          >
            Get access to our one-time sale
          </a>
        </div>
      </section>
    </div>
  );
}
