import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const ProductPage = () => {
  const { query: { id } } = useRouter()
  const [product, setProduct] = useState<TProduct>()

  useEffect(() => {
   id && window
      .fetch(`/api/avo/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data)
      })
      .catch(err => console.error(err))
  }, [id])
  return (
    <section>
      <h1>Página producto: {product?.name}</h1>
    </section>
  )
}

export default ProductPage
