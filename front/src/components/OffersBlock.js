import React from 'react';
import Offer from './Offer'
import HeadTitle from './HeadTitle';


class OffersBlock extends React.Component {
  render() {
    return (
      <div>
  <HeadTitle title={this.props.title} />
    <div class="row">
      <div className="expand">
        <ul type="none">
            <Offer/>
            </ul>
    </div>
  </div>
  </div>
    )
  }
}

export default OffersBlock;