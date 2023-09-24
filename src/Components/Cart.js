import React, { useEffect, useState } from 'react'

export const Cart = () => {

    let cartItems = JSON.parse(localStorage.getItem('cartItems'));
    if(cartItems===null){
        cartItems = [];
    }
    const [cart,setCart] = useState(cartItems);

    const deleteItem = (index)=>{
        const temp = [...cart];
        temp.splice(index,1);
        setCart(temp);
        window.location.reload();
    }

    const increment = (index)=>{
        const newState = cart.map((item,i)=>{
            if(i===index){
                return {
                    ...item,
                    "qty":item.qty+1,
                }
            }
            else{
                return item;
            }
        });
        setCart(newState);
    }

    const decrement = (index)=>{
        const newState = cart.map((item,i)=>{
            if(i===index){
                return {
                    ...item,
                    'qty':item.qty-1,
                }
            }
            else{
                return item;
            }
        });
        setCart(newState);
    }

    const totalPrice = ()=>{
        let sum = 0;
        for(let i=0;i<cart.length;i++){
            sum = sum + Math.ceil(cart[i].price * cart[i].qty);
        }
        return sum;
    }

    const clearCart = ()=>{
        setCart([]);
        window.location.reload();
    }

    useEffect(()=>{
        localStorage.setItem('cartItems',JSON.stringify(cart));
    },[cart]);


  return (
    <>
    <div className="cart-outer-container">
        <div className="cart-child-container">
            {cart.length===0 && <div className='emptyCart'> 
                <h2>Cart is empty</h2>
                <button className="cartBtn" onClick={()=>window.location='/'}>Shop now</button>
                 </div>}
            {cart.length!==0 && cart.map((item,index)=>{
                return <div className="cart-item-container">
                <div className="cart-item-name">
                    {item.name}
                </div>
                <div className="cart-item-price">
                    {`$ ${Math.ceil((item.price  * item.qty))}`}
                </div>
                <div className="cart-item-qty">
                    {item.qty > 1 && <button className="qtyBtn" id="decrementBtn" onClick={()=>decrement(index)}>-</button>}
                    {item.qty}
                    <button className="qtyBtn" id='incrementBtn' onClick={()=>increment(index)}>+</button>
                </div>
                <div className="cart-item-delete">
                    <button className="cartBtn" onClick={()=>deleteItem(index)}>delete</button>
                </div>
            </div>
            })}
            {cart.length!==0 && <div className="cart-total-price">
                <p>{`Total: $ ${totalPrice()} `}</p>
                <button className="cartBtn" onClick={clearCart}>clear cart</button>
            </div>}
        </div>
    </div>
    </>
  )
}
    