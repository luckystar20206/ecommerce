import React from "react";
import { useLoaderData } from "react-router-dom";
import Product from "./Product";

const Shop = () => {
  const products = useLoaderData();
  console.log(products);
  return (
    <div className="mt-[200px] flex">
      <div className="w-4/5">
        <div className="grid grid-cols-3 gap-4">
          {products.map((product) => (
            <Product key={product.id} product={product}/>
          ))}
        </div>
      </div>
      <div className="w-1/5">cart</div>
    </div>
  );
};

export default Shop;
