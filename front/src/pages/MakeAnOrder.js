import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Order from '../components/Order'

class MakeAnOrder extends React.Component {
  render(){
    return(
      <div>
      <Header />
      <Order />
      <Footer />
      </div>
    )
  }
}

export default MakeAnOrder;

