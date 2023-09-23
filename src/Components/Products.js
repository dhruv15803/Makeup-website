import React from 'react'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Products = (props) => {



  return (
    <>
    <div className="products-outer-container">
      <div className="products-child-container">
        {props.products!==undefined && props.products.map((item,index)=>{
          if(props.brand===item.brand){
          return <div className="products-item-container">
            <img src={item.image_link} alt="" />
            <p>{item.name}</p>
            <p>{`$ ${item.price}`}</p>
            <button className="productBtn" onClick={()=>props.addToCart(index)}>Add to cart</button>
        </div>
          }
          else{
            return <></>
          }
        })}
      </div>
    </div>
    <ToastContainer
position="bottom-right"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
    </>
  )
}
