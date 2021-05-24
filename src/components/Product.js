import React from 'react'
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context'

export default function Product(props) {
  const {volumeInfo, saleInfo} = props.product;
const a = {
  title:volumeInfo.title,
  img: volumeInfo.imageLinks?.smallThumbnail !== undefined ? volumeInfo.imageLinks.smallThumbnail : 'http://books.google.com/books/content?id=-RGhYgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
  author: volumeInfo.authors,
  price: saleInfo.listPrice?.amount !== undefined ? saleInfo.listPrice.amount : Math.floor(Math.random() * 100),
  info: volumeInfo.description,
  inCart:false,
  count: 0,
  total: 0
}
const {title,img,author,price,info,inCart} = a
  return (
    <div>
      <div className='product_container'>
                    <div className='product_img'>
                        <Link to='/details'><img src={img} alt="product" className='imgincard' /></Link>
                    </div>
                    <div className='info_cont'>
                    <div className='allInfo'>
                            <p className='author'>{author}</p>
                            <h2 className='nameofbook'>{title.split(' ').slice(0,3).join(' ') + ' ...'}</h2>
                            <p className='info'>{info ? info.split(' ').slice(0,10).join(' ') + '...' : ''}</p>
                            <div className='price_cont'>
                            <h2 className='price'><span>$</span>{`${price}`}</h2>
                            <h2 className='price'><span>$</span>{`${((price * 0.3) + price)}`}</h2>
                            </div>
                    </div>
                    <div className='car-buttons'>
                         <button className='cart-btn' disabled={inCart? true: false}>
                             {inCart?(
                                 <p disabled> {" "} In Cart</p>
                             ) : (
                                 <p>Add to Cart</p>
                             )}
                        </button>
                              <ProductConsumer>
                                {value => {
                                  return (
                                    <Link to='/details' className='link cart-details-btn' onClick={()=>{
                                      value.handleDetail(props.product)
                                    }}>
                                      <p>View</p>
                                    </Link>
                                  )
                                }}
                              
                              </ProductConsumer>
                    </div>
                    </div>
                </div>
    </div>
  )
}