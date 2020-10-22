import React from 'react';
import Object from '../Object'


function Mountain(props) {
    const Obj1 = [
        { img1 :  require('../../assets/images/Mountain/mountain1.jpg')},
        { img1 :  require('../../assets/images/Mountain/mountain2.jpg')},
        { img1 :  require('../../assets/images/Mountain/mountain3.jpg')},
        { img1 :  require('../../assets/images/Mountain/mountain4.jpg')},
        { img1 :  require('../../assets/images/Mountain/mountain5.jpg')},
        { img1 :  require('../../assets/images/Mountain/mountain6.jpg')},       
        
    ]
  
    const pagetitle = 'Mountain Pictures';


    return (
        <div>
            <Object  Obj1 ={Obj1} pagetext={pagetitle} /> 
        </div>
    );
}

export default Mountain;