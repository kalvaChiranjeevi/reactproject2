import React, { useState ,useEffect } from 'react';

 function SearchInput (props) {

    const [query ,setQuery] = useState('');
    
    const prms =  props.match.params

    
      
     const handleSearch = (e) => {
                e.preventDefault();
                props.history.push(`/${query}`);
      }
     const queryChange = (evt) => {
        setQuery( evt.target.value);
        
        
      }
    
     

        console.log('Searchprops',props)
        return (
            
          <form>
            <input id="site-search" type="search" placeholder='search' value={query} onChange={queryChange} />
            <input type="submit" value="Search" onClick={handleSearch} />
            {
    console.log('path',prms)

            }

          </form>
        )
      
}

export default SearchInput;