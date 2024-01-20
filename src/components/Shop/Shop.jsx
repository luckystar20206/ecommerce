import { useLoaderData } from "react-router-dom";
import Product from "./Product";
import "./Shop.css"
import { useContext, useState } from "react";
import Cart from "./Cart";
import { AuthContext } from "../../context/AuthContext";

const Shop = () => {
  const {user} = useContext(AuthContext)
  const products = useLoaderData();
  const [cardProduct, setCardProduct] = useState([])
  const addToCard = (callBackProduct) => {
    let newCart = []
    const productExist = cardProduct.find(product => product.id === callBackProduct.id)
    if(!productExist){
      callBackProduct.quantity = 1;
      newCart = [...cardProduct, callBackProduct]
    }else{
      const rest = addToCard.filter(product => product.id !== callBackProduct.id)
      productExist.quantity = productExist.quantity + 1
      setCardProduct(...rest, productExist)
    }
    setCardProduct(newCart)
  }
  const clearCard = () => {
    setCardProduct([])
  }
  return (
    <div className="mt-[200px] flex gap-6 container">
      {user.emailVerified ? <><div className="w-4/5">
        <div className="grid grid-cols-3 gap-4">
          {products.map((product) => (
            <Product key={product.id} product={product} addToCard={addToCard}/>
          ))}
        </div>
      </div>
      <div className="sidebar w-1/5 bg-orange p-5 overflow-hidden">
        <Cart cart={cardProduct} clearCard={clearCard}/>
      </div></>: <h1 className='text-orange'>Please verify your Email!</h1>}
    </div>
  );
};

export default Shop;
