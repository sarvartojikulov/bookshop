import React, {useState, useEffect} from 'react'
import Product from './Product'
import axios from 'axios'


export default function ProductList() {
  const subjects = ['love', 'feminism','inspirational','authors','poetry','fantasy','romance']
  const [subject, setSubject] = useState('feminism')
  const [index, setIndex] = useState(6)
  const [books, setBooks] = useState(null)



  useEffect(() => {
    return document.querySelectorAll('.categories_container>ul>li').forEach(item => {
      item.addEventListener('click', () => {
        document.querySelectorAll('.categories_container>ul>li').forEach(item => item.classList.remove('current'))
        item.classList.toggle('current')
      })
    })
  }, [])
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:${subject}&startIndex=${index}&maxResults=6`)
      return setBooks(result.data.items)
    }
    fetchData()
  }, [subject, index])
  return (
    <div className='hero_container'>
      <div className='categories_container'>
        <h1>Categories</h1>
        <ul>
          {subjects.map((el,i) => {
            return <li key={i} onClick={() => setSubject(el)}>{el}</li>
          })}
        </ul>
      </div>
      <div className='product_list_container'>
        <div className='index_handler'>
          <div className='nextBtn' onClick={()=>{
             setIndex(index + 6)
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            </div>
          <div className='nextBtn' onClick={()=>{
             setIndex(index + 6)
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      <h1>{subject}</h1>
      <div className="product_list">
        {books ? 
        books.map(item => {
            return <Product key={item.id} product={item}></Product>})
          :
          <h1>Loading ...</h1>}
      </div>
    </div>
    </div>
    
  )
}


document.querySelectorAll('.categories_container>ul>li').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.categories_container>ul>li').forEach(item => item.classList.remove('current'))
    item.classList.toggle('current')
  })
})