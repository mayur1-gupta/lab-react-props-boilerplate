import './App.css';
import elephant from "./images/elephant.jpeg";
// import React from 'react';



//  const App = props => {
  
 function App(props){
const imgDATA = props.myData();
 
  return(
    <div>
      <h1 className='h1'>Kalvium gallary</h1>
      <div className='body' >
        {
        imgDATA.map((item,index)=>{
          return(
            <>
             <div key={index}>
              <img src={item.img} alt="" className='img' />
            </div>
            </>
           
          )
        })
        }
      </div>
    </div>
  )
}
export default App;