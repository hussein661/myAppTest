import React from 'react'
import { Link } from 'react-router-dom'
import Cart from './Cart';

class Header extends React.Component {
  render(){
    return(
      <header className="navbar-default navbar-fixed-top header-search">
      <div className="header-limiter" id="Top">
      <h1><a href="/">BlissFul<span>Bites</span></a></h1>
      <nav>
        <a className="headerlinks" href="/">Homes</a>
        <Link className="headerlinks" to="/menu">Store</Link>
        <Link className="headerlinks" to="/Blog">Blog</Link>
        {/* <Link className="headerlinks" to="/makeanorder">Make an order</Link> */}
        {/* <Link className="headerlinks" to="aboutUs">About</Link> */}
        <a href="#footer" className="headerlinks" id="contactfooter">Contact</a>
        <Cart orders={this.props.orders} removeFromOrder={this.props.removeFromOrder}/>
      </nav>
    </div>
  </header>

    )
  }
}

export default Header;