import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Categories from '../components/Categories';
import '../styles/menu.css'
import CakeItemContainer from '../components/Containers/CakeItemContainer';
import CupcakeItemContainer from '../components/Containers/CupcakeItemContainer';
import CookiesItemContainer from '../components/Containers/CookiesItemContainer';
import OfferItemContainer from '../components/Containers/OfferItemContainer';

class Menu extends React.Component {


  state = {
    orders:[]
  }


  addToOrder = (id,name,price) => {

    const orders = [...this.state.orders];
    if (!orders[id]){
      orders[id] = {
        key:id,
        name : name,
        price : price,
        qty: 1
      }
    }else {
       
      orders[id].qty +=1
    }

    this.setState({ orders });
  }
  

  removeFromOrder = id => {
    const orders = [...this.state.orders]
    delete orders[id]
    this.setState({orders});
  }

  render(){
    return(
      <div>
      <Header orders={this.state.orders} removeFromOrder={this.removeFromOrder}/>
      {/* <Cart /> */}
      {/* <Title /> */}
      <Categories />
      <CakeItemContainer title="Cake"  addToOrder={this.addToOrder} />
      <CupcakeItemContainer title="CupCakes"addToOrder={this.addToOrder} />
      <CookiesItemContainer title="Cookies" addToOrder={this.addToOrder}/>
      <OfferItemContainer title="Offers" addToOrder={this.addToOrder}/>

      <button title="scroll up" id="scroll"><span></span></button>
      
      


      <Footer />
      </div>
    )
  }
}

export default Menu;

