import React from 'react';
import Object from '../Object'


function Bird(props) {
    const Obj1 = [
        { img1 :  require('../../assets/images/Bird/Bird1.jpg')},
        { img1 :  require('../../assets/images/Bird/Bird2.jpg')},
        { img1 :  require('../../assets/images/Bird/Bird3.jpg')},
        { img1 :  require('../../assets/images/Bird/Bird4.jpg')},
        { img1 :  require('../../assets/images/Bird/Bird5.jpg')},
        { img1 :  require('../../assets/images/Bird/Bird6.jpg')},      
        
    ]
    
    const pagetitle = 'Bird Pictures';
  
    return (
        <div>
            <Object  Obj1 ={Obj1}  pagetext={pagetitle}  /> 
        </div>
    );
}

export default Bird;