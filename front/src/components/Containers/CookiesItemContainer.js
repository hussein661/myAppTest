import React from 'react';
import HeadTitle from '../HeadTitle';
import CookiesItem from '../Items/CookiesItem';



class CookiesItemContainer extends React.Component {
  render() {
    return (
      <div>
  <HeadTitle title={this.props.title}/>
    <div className="row rowitem" id="Cookiesbar">
      <div id="small-img" >
          <CookiesItem  addToOrder={this.props.addToOrder}/>

    </div>
  </div>
  </div>
    )
  }
}

export default CookiesItemContainer;