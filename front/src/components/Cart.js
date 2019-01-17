import React from 'react';
import '../styles/button.css'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";

import '../styles/Cart.css'

class Cart extends React.Component {


  constructor() {

    super();

    this.state = {

      showMenu: false,
    };

    this.showMenu = this.showMenu.bind(this);
    // this.closeMenu = this.closeMenu.bind(this);
  }


  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  // closeMenu(event) {

  //   if (!this.dropdownMenu.contains(event.target)) {

  //     this.setState({ showMenu: false }, () => {
  //       document.removeEventListener('click', this.closeMenu);
  //     });

  //   }
  // }

  render() {

    let orders = this.props.orders;
    if (orders) {
      const filterdOrders = orders.filter(id => {
        if (id === null) {
          return false;
        }
        return id;
      });
      orders = filterdOrders
      const total = orders.length
      let pricesArray = [];
      orders.map(order =>
        pricesArray.push((order.price) * order.qty)
      )
      var sum = pricesArray.reduce((a, b) => a + b, 0);
      return (
        <div>
          <button className="cartbutton" onClick={this.showMenu}>
            <i className="fa fa-shopping-cart"></i><span id="totalcounter">{total}</span>

          </button>

          {

            this.state.showMenu
              ? (


                <div
                  className="menu"
                  ref={(element) => {
                    this.dropdownMenu = element;
                  }}
                >

                  <div className="cartcontainer">


                    {orders.map(item => {
                      return <p className="cartmenu">
                        <button className="cartitemdelet"
                          onClick={() => this.props.removeFromOrder(item.key)}>
                          <i className="fa fa-window-close" aria-hidden="true"></i>
                        </button>
                        {item.name}
                        <div className="cartPrice">{item.price * item.qty} L.L</div>
                        <div className="cartcounter">{item.qty}</div>
                      </p>
                    }
                    )
                    }
                    <hr />{sum > 0 ?
                      `Total : ${sum} L.L` : ""
                    }
                    <hr />{orders.length > 0 ?
                      <Link to={{ pathname: '/checkout', state: { orders } }} className="checkOut">Checkout</Link>
                      :
                      ""
                    }
                  </div>
                  <ToastContainer />
                </div>
              )
              : (
                null
              )
          }
        </div>
      );

    } else {
      return ("")
    }

  }
}


export default Cart;
