import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Slider from '../components/Slider';
import Title from '../components/Title';
import Offers from '../components/OffersBlock';
import Block from '../components/Block';
import '../styles/home.css';
import '../styles/immersive-slider.css';
import '../styles/main.css';



class Home extends React.Component {

  render(){
    return(
      <div>
        <Header />
        <Title />
        <Slider />
        <Block />
        <button title="scroll up" id="scroll"><span></span></button>
        <Offers title="Our offers" />
        <Footer />
      </div>
    )
  }
}

export default Home;
