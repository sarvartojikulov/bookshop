import React, { useState } from 'react'
import {Link} from 'react-router-dom';


export default function Product() {
  const a = {
    id:1,
    title:'Crazy rich asians',
    img: './product-1.png',
    author: 'Kevin Kwan',
    price: 24.12,
    info: 'the outrageously funny debut novel about three super-rich, pedigreed Chinese families and the gossip.',
    inCart:false,
    count: 0,
    total: 0
}
const {id,title,author,img,price,inCart,info} = a;
  return (
    <div>
      <div className='product_container'>
                    <div className='product_img'>
                        <Link to='/details'><img src={img} alt="product" className='imgincard' /></Link>
                    </div>
                    <div className='info_cont'>
                    <div className='allInfo'>
                            <p className='author'>{author}</p>
                            <h2 className='nameofbook'>{title}</h2>
                            <p className='info'>{info}</p>
                            <h2 className='price'><span>$</span>{price}</h2>
                    </div>
                    <div className='car-buttons'>
                         <button className='cart-btn' disabled={inCart? true: false}>
                             {inCart?(
                                 <p disabled> {" "} In Cart</p>
                             ) : (
                                 <p>Add to Cart</p>
                             )}
                        </button>
                        <Link to='/details' className='link cart-details-btn'>
                            <p>View</p>
                        </Link>
                    </div>
                    </div>
                </div>
    </div>
  )
}
