import React,{useState} from 'react';
import {NavLink,useHistory } from 'react-router-dom';



import Card from '../Ui/Card/Card';
import  './style.css';

function Header(props) {

    const [query ,setQuery] = useState('');

    
    // const prms =  props.match
    const history = useHistory();

    const Handlelogout = (e) =>{
            e.preventDefault();
            history.push(`/`);
            localStorage.removeItem('username');
            localStorage.removeItem('password');


    }
      
     const handleSearch = (e) => {
                e.preventDefault();
                if(query.toLowerCase() ==='bird'){
                  history.push(`bird`);
                } else if(query.toLowerCase() ==='beach'){
                    history.push(`beach`);
                }else if(query.toLowerCase() ==='food'){
                    history.push(`food`);
                }else if(query.toLowerCase() ==='mountain'){
                    history.push(`mountain`);
                } else {
                    history.push(`error`);
                }
                setQuery('');

                
      }
     const queryChange = (evt) => {
        setQuery( evt.target.value);
        
        
      }




    const searchinput = {
        
                    padding: '6px',
                    border: '1px soild #ccc',
                   
                    marginRight: '4px',
                    fontSize: '17px',
                    lineHeight: '25px',
            }

           
            const activ=props.location.pathname==='/home';
            
          
    return (

        <div style={props.style}>
            <Card>
            <header className="header">
            <div className="logout">
                <button onClick={Handlelogout}>Logout</button>
            </div>
            <div className="searchform">
            <form>
                <input style={searchinput}  type="text" placeholder="Search here..." value={query} onChange={queryChange}/>
                <button type="submit" value="Search" onClick={handleSearch} ><i className="fa fa-search"></i>

            </button>
                
                
            </form>
            </div>

            <div>

            <ul className="header-menu">
            <li><NavLink exact className={activ?'active':null}  to='beach'>Beach</NavLink></li>
            <li><NavLink to='bird'>Bird</NavLink></li>
            <li><NavLink to='food'>Food</NavLink></li>
            <li><NavLink to='mountain'>Mountain</NavLink></li>

            </ul>

            </div>
            </header>
            </Card>
            
           
        </div>
        
    );
}

export default Header;