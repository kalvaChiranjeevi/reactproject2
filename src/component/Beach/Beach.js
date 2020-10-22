import React from 'react';
import Object from '../Object/';

import './style.css';

function Beach(props) {

    
        const Obj1 = [
            { img1 :  require('../../assets/images/Beach/Beach1.jpg')},
            { img1 :  require('../../assets/images/Beach/Beach2.jpg')},
            { img1 :  require('../../assets/images/Beach/Beach3.jpg')},
            
            { img1 :  require('../../assets/images/Beach/Beach4.jpg')},
            { img1 :  require('../../assets/images/Beach/Beach5.jpg')},
            { img1 :  require('../../assets/images/Beach/Beach6.jpg')},            
        ]

        const pagetitle = 'Beach Pictures';
      

        
    return (
            <div>         
               
                <Object  Obj1 ={Obj1}  pagetext ={pagetitle}/>                    
                
            </div>
    );
}

export default Beach;