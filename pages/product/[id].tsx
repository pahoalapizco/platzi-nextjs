import React, { useState, useEffect } from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import fetch from 'isomorphic-unfetch'

import Layout from '@components/Layout/Layout'
import ProductSummary from '@components/ProductSummary/ProductSummary'

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch('https://platzi-avo.vercel.app//api/avo')
  const { data }: TAPIAvoResponse = await response.json()

  const paths = data.map((avo: TProduct) => ({
    params: { id: avo.id }
  }))

  return {
    paths,
    // incremental static generation
    // Cualquier página que no se especifique en lo paths va dar un error 404
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string
  const response = await fetch(`https://platzi-avo.vercel.app/api/avo/${id}`)
  const product: TProduct =  await response.json()

  return {
    props: {
      product
    }
  }
}

const ProductPage = ({ product }: { product: TProduct }) => {
  return (
    <Layout>
      {product == null ? null : <ProductSummary product={product} />}
    </Layout>
  )
}

export default ProductPage
