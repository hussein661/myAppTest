import React from 'react';


class Slider extends React.Component{
  render(){
    return(
      <div className="wrapper">
      <div className="main">
        <div className="page_container">
          <div id="immersive_slider">


            <div className="slide" data-blurred={require('../images/21_1.png')}>
              <div className="content">
                <h2><a href="http://www.bucketlistly.com" target="_blank" rel="noopener noreferrer">BucketListly</a></h2>
                <p>It’s never been easier to watch YouTube on the big screen
                  Send your favorite YouTube videos from your Android phone or tablet to TV with the touch of a button.
                  It’s easy. No wires, no setup, no nothing. Find out more here.</p>
              </div>
              <div className="image">
                <a href="http://www.bucketlistly.com" target="_blank" rel="noopener noreferrer">
                  <img src={require('../images/21_1.png')} alt="Slider 1"/>
                </a>
              </div>
            </div>


            <div className="slide" data-blurred={require('../images/23_1.png')}>
              <div className="content">
                <h2><a href="http://www.bucketlistly.com/apps" target="_blank" rel="noopener noreferrer">BucketListly Apps</a></h2>
                <p>It’s never been easier to watch YouTube on the big screen
                  Send your favorite YouTube videos from your Android phone or tablet to TV with the touch of a button.
                  It’s easy. No wires, no setup, no nothing. Find out more here.</p>
              </div>
              <div className="image">
                <a href="http://www.bucketlistly.com/apps" target="_blank" rel="noopener noreferrer"> <img src={require('../images/23_1.png')}
                    alt="Slider 2"/></a>
              </div>
            </div>


            <div className="slide" data-blurred={require('../images/25_1.png')}>
              <div className="content">
                <h2><a href="http://www.thepetedesign.com" target="_blank" rel="noopener noreferrer">The Pete Design</a></h2>
                <p>It’s never been easier to watch YouTube on the big screen
                  Send your favorite YouTube videos from your Android phone or tablet to TV with the touch of a button.
                  It’s easy. No wires, no setup, no nothing. Find out more here.</p>
              </div>
              <div className="image">
                <a href="http://www.thepetedesign.com" target="_blank" rel="noopener noreferrer"><img src={require('../images/25_1.png')}
                    alt="Slider 3" /></a>
              </div>
            </div>
            <button className="is-prev">&laquo;</button>
            <button className="is-next">&raquo;</button>
            </div>
      </div>
    </div>
    <div className="benefits">
      <div className="page_container">
      </div>
    </div>
  </div>
    )
  }
}


export default Slider;