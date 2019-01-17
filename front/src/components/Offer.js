import React from 'react';
import { Link } from 'react-router-dom'


class Offer extends React.Component {

  state = {
    alloffers: []
  }

 
  getalloffers = async () => {
    const response = await fetch (`http://localhost:5000/cakes/allcatoffer`)
    const answer = await response.json()
    if(answer){
      const alloffers = answer.result;
      this.setState({alloffers})
    }
  }

  componentDidMount(){
    this.getalloffers()
  }


  render() {
    return (
      <div className="offersGridOffer">
        {this.state.alloffers.slice(0,3).map(cake=>
          <div className="offerli">
          <img src={cake.image} className="img-responsive" alt="Responsive" />
          <p className="pic-title"> {cake.name}</p>
          <Link to="/menu#Offersbar"><button className="viewmore">view more</button></Link>
        </div>)}
      </div>
        

    )
  }
}

export default Offer;