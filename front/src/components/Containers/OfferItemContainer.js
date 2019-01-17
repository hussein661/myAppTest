import React from 'react';
import HeadTitle from '../HeadTitle';
import OfferItem from '../Items/OfferItem';


class OfferItemContainer extends React.Component {


  
  render() {
    
    return (
      <div id="Offersbar">
  <HeadTitle title={this.props.title} />
    <div className="row rowitem">
      <div id="small-img" >
          <OfferItem  addToOrder={this.props.addToOrder} />

    </div>
  </div>

</div>
    )
  }
}

export default OfferItemContainer;