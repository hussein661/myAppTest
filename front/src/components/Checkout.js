import React, { Component } from 'react';
import Order from './Order';
import Header from '../components/Header';
import Footer from '../components/Footer';

class Checkout extends Component {


  render() {
    return (
      <div>
        <Header />
        <Order state={this.props.location.state}/>
        <Footer />
      </div>
    );
  }
}

export default Checkout;