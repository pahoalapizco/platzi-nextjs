import React, { useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'
import Layout from '@components/Layout/Layout'
import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader'
import ProductList from '@components/ProductList/ProductList'

export const getStaticProps = async () => { // page only
  const response = await fetch('https://platzi-avo.vercel.app//api/avo')
  const { data }: TAPIAvoResponse = await response.json()

  return {
    props: {
      productList: data
    }
  }
}
// export const getServerSideProps = async () => { // page only
//   const response = await fetch('http:/localhost:3000/api/avo')
//   const { data }: TAPIAvoResponse = await response.json()

//   return {
//     props: {
//       productList: data
//     }
//   }
// }

const HomePage = ({ productList }: { productList: TProduct[] }) => {

  return (
    <Layout>
      <KawaiiHeader />
      <ProductList products={productList} />
    </Layout>
  )
}

export default HomePage
