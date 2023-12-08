import React, { Component } from "react";
import "./App.css"
// import imageData from "./components/DataComponent";

class AppClass extends Component{


  render(){
    const imageData =this.props.myData();
    return(<>
      <div className="h1">
      <h1>Kalvium Gallary</h1>
      </div>
      <div className="body">
        {imageData.map((image, index) => {
            return(
              <div key={index}>
                <img src={image.img} alt="" className="img"/>
              </div>
              
            
            )
          })
        }
        </div>
      </>
    )
  }
}
export default AppClass
