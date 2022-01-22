import React from 'react'
import { useFilterContext } from '../context/filter_context'
import GridView from './GridView'
import ListView from './ListView'

const ProductList = () => {
  const {filtered_product: products} = useFilterContext();

  return <GridView products={products}/>
  
}

export default ProductList
