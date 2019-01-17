import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/about.css'



export default class AboutUS extends React.Component{
  render(){
    return(
      <div>
        <Header />
        <div className="grid-about">
        
        <div className="about-img">
        <h1>my name is hussein</h1>
        <img alt="profile" className="profile-image" src="https://previews.123rf.com/images/salamatik/salamatik1801/salamatik180100019/92979836-profile-anonymous-face-icon-gray-silhouette-person-male-default-avatar-photo-placeholder-isolated-on.jpg"/>
        
        </div>
        <div className="header-about">header</div>
        <div className="ads-about">ads</div>
        <div className="side-about">side</div>
        <div className="main-about">main</div>
        <div className="footer-about">footer</div>
        
        
        </div>

        <Footer />
        </div>
    )
  }
}