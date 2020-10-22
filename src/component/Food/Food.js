import React from 'react';
import Object from '../Object'

function Food(props) {
    const Obj1 = [
        { img1 :  require('../../assets/images/Food/Food1.jpg')},
        { img1 :  require('../../assets/images/Food/Food2.jpg')},
        { img1 :  require('../../assets/images/Food/Food3.jpg')},
        { img1 :  require('../../assets/images/Food/Food4.jpg')},
        { img1 :  require('../../assets/images/Food/Food5.jpg')},
        { img1 :  require('../../assets/images/Food/Food6.jpg')},        
        
    ]
    const pagetitle = 'Food Pictures';
  
    return (
        <div>
            <Object  Obj1 ={Obj1}  pagetext = {pagetitle}/> 
        </div>
    );
}

export default Food;