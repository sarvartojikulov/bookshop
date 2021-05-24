import React from 'react'
import {ProductConsumer} from '../context'
import {Link} from 'react-router-dom';
export default function Details() {
  return (
    <div>
      <ProductConsumer>
        {value => {
          const {id, volumeInfo, saleInfo} = value.detailProduct;
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
            <div className='details_container'>
                            <div className='details_title'>
                                <h1>{title}</h1>
                            </div>
                            <div className="details_second_con">
                                <div className='details_img'>
                                    <img src={img} alt='as'></img>
                                </div>
                                <div className='details_datainfo'>
                                    <h2>{author}</h2>
                                    <p>{info}</p>
                                    <h3><span>$</span>{price}</h3>
                                    <div className='detail_btns'>
                                        <button className='details_btn1' disabled={inCart? true: false}
                                            onClick={()=>{
                                                value.addToCart(id);
                                                value.openModal(id);
                                            }}>
                                            {inCart?(
                                                <p disabled> {" "} In Cart</p>
                                            ) : (
                                                <p> Add to Cart</p>
                                            )}
                                        </button>
                                        <Link to='/' className='details_btn2' onClick={()=> console.log('viewed details')}>
                                            <p>Back to shop</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
          )
        }}
      </ProductConsumer>
    </div>
  )
}
