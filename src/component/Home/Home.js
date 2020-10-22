import React ,{useEffect}from 'react';

import Beach from '../Beach/Beach';




function Home(props) {

    
    useEffect(() => {
        
    },[props.location]);

    

    return (
        <div >          
                    
           <Beach {...props}  />
            
        </div>
    );
}

export default Home;