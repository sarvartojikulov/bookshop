import React, { Component } from 'react'

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state ={
    detailProduct : {},
    cart : [],
    cartSubtotal : 0,
    cartTax: 0,
    cartTotal: 0
  }
  handleDetail = (item) => {
    this.setState(() => {
      return {detailProduct: item}
    })
  }


  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state,
        handleDetail: this.handleDetail
      }}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}


const ProductConsumer = ProductContext.Consumer
export {ProductProvider, ProductConsumer}