import React from 'react';
import HeadTitle from '../HeadTitle';
// import CakeItem from '../Items/CakeItem';
// import CookiesItem from '../Items/CookiesItem';
import CupcakeItem from '../Items/CupcakeItem';


class CupcakeItemContainer extends React.Component {
  render() {
    return (
      <div id="Cupcakebar">
  <HeadTitle title={this.props.title}/>
    <div className="row rowitem" >
      <div id="small-img" >
          <CupcakeItem addToOrder={this.props.addToOrder}/>

    </div>
  </div>
  </div>
    )
  }
}

export default CupcakeItemContainer;