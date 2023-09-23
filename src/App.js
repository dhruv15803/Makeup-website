
import './App.css';
import { Home } from './Components/Home';
import { Navbar } from './Components/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Products } from './Components/Products';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Cart } from './Components/Cart';

function App() {
  let cartItems = JSON.parse(localStorage.getItem('cartItems'));
  if(cartItems===null){
    cartItems=[];
  }
  const [products,setProducts] = useState([]);
  const [cart,setCart] = useState(cartItems);

  useEffect(()=>{
    fetch("http://makeup-api.herokuapp.com/api/v1/products.json?").then((res)=>res.json()).then((data)=>setProducts(data)); 
  },[]);

  const addToCart = (index)=>{
    // Checking to see if products[index].id exists in cart[i]
    for(let i=0;i<cart.length;i++){
      if(cart[i].id===products[index].id){
        toast.error('Already in cart');
        return;
      }
      else{
        continue;
      }
    }
    setCart(prevCart=>[...prevCart,{
      "id":products[index].id,
      "brand":products[index].brand,
      "name":products[index].name,
      "price":products[index].price,
      "qty":1,
    }]);
    toast.success('Added to cart');
  }

  useEffect(()=>{
    localStorage.setItem('cartItems',JSON.stringify(cart));
  },[cart]);

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/maybelline' element={<Products brand='maybelline' products={products} addToCart={addToCart}/>}/>
      <Route path="/l'oreal" element={<Products brand="l'oreal" products={products} addToCart={addToCart}/>}/>
      <Route path="/pacifica" element={<Products brand="pacifica" products={products} addToCart={addToCart}/>}/>
      <Route path="/marcelle" element={<Products brand="marcelle" products={products} addToCart={addToCart}/>}/>
      <Route path="/milani" element={<Products brand="milani" products={products} addToCart={addToCart}/>}/>
      <Route path="/zorah" element={<Products brand="zorah" products={products} addToCart={addToCart}/>}/>
      <Route path='/Cart' element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
