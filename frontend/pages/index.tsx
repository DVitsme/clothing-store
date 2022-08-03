import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {useQuery} from 'urql'
import { PRODUCT_QUERY } from '../lib/query'


const Home: NextPage = () => {

  // Fetch products from strapi
  const [results] = useQuery({query: PRODUCT_QUERY})
  const {data,fetching,error} = results;

  if(fetching) return <p>Loading...</p>
  if(error) return <p>oh no...{error.message}</p>

  console.log(data)
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
       <h1>Hello</h1>
      </main>

    </div>
  )
}

export default Home
