import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar'

const HomePage = () => {
  const [productList, setProductList] = useState<TProduct[]>([])

  useEffect(() => {
    window
      .fetch('/api/avo')
      .then((response) => response.json())
      .then(({data, length}) => {
        setProductList(data)
      })
  }, [])
  
  return (
    <div>
      <Navbar />
      <div>Platzi and Next.js!</div>
      {
        productList.map(item => <h3 key={item.id}> {item.id} - {item.name} </h3>)
      }
    </div>
  )
}

export default HomePage
