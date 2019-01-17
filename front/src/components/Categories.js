import React from 'react'
import Cakes from './cakeCategories/Cakes'
import CupCakes from './cakeCategories/CupCakes'
import Cookies from './cakeCategories/Cookies'


class Categories extends React.Component {
  render(){
    return(

      <div className="grid">
        <Cakes />
        <Cookies />
        <CupCakes />

        <div id="logo">
          {/* <a href="http://webdesignerwall.com/tutorials/lively-splitscreen-layout-css3-animations" target="_blank">View Tutorial</a> */}
          <img alt="title" src="https://www.dropbox.com/s/oe7bvbedwlg68v7/logo2.png?raw=1"/> 
        </div>
      </div>



    )
  }
}

export default Categories;