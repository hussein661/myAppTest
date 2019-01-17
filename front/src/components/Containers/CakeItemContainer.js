import React from 'react';
import HeadTitle from '../HeadTitle';
import CakeItem from '../Items/CakeItem';


class CakeItemContainer extends React.Component {


  
  render() {
    
    return (
      <div id="Cakebar">
  <HeadTitle title={this.props.title} />
    <div className="row rowitem">
      <div id="small-img" >
          <CakeItem  addToOrder={this.props.addToOrder} />

    </div>
  </div>

  </div>
    )
  }
}

export default CakeItemContainer;