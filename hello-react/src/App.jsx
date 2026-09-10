import React, { Fragment } from 'react'
import './App.css'
import God from './god.jsx';
import Product from './product.jsx';
import Products from './Products';

function App() {
  const a = 10;
  const b = 20;

  return (
    <>
      <h1 style={{ backgroundColor: "red" }}>
        Heloo React
      </h1>

      <h2>
        Raga of revenge
      </h2>

      <p>a is : {a}</p>
      <p>b is : {b} </p>
      <p>Addition is : {a + b}</p>

      {God()}
      <God></God>
      <God />

      <Product name="watch" price="2500" description="This is a watch" brand="rolex" />
      <Product name="maxhub" price="200000" brand="Samsung" />

      {Products.map(p => (
        <Product 
     
          name={p.name} 
          price={p.price} 
          description={p.description} 
          brand={p.brand} 
        />
      ))}
    </>
  )
}

export default App