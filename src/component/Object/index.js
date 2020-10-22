import React from 'react';
import Card from '../Ui/Card/Card';
import './style.css';


function Object(props) {

    const objarr = props.Obj1;
     
    
    function ObjectImg(image){
        return(          
            objarr.map((imges,index) =>{
                return(<div key={index}>                 
                <img src={imges.img1}  alt="Object1"/>
            </div>);
            })
             
                             
        );
    }
    
    return (
        <div className="ourobject">
            
        <Card >
            <span>{props.pagetext}</span>
        {ObjectImg()}         
       
        </Card>
    </div>
    );
}

export default Object;