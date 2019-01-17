import React from 'react';

class HeadTitle extends React.Component {
  render() {
    return (
      <div className="col-md-12 pb-80 header-text text-center" id="itemstitle">
        <h1 className="pb-10">{this.props.title}</h1>
        <p>
        </p>

      </div>
    )
  }
}

export default HeadTitle;