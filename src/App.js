import React from 'react';
import { Switch, Route,withRouter} from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';
import Beach from './component/Beach/Beach';
import Bird from './component/Bird/Bird';
import Mountain from './component/Mountain/Mountain';
import Food from './component/Food/Food';
import Header from './component/Header/Header';
import Nodata from './component/Nodata/Nodata';
import Loginform from './component/Login';



function App(props) {

   return (
    
      
      <div className="App">
      
          {
             props.location.pathname==='/' ? '':<Header {...props} />
          }
          <Switch>
   
              <Route path="/" exact component={Loginform} />
              <Route   path="/home"  component={Home} />

              <Route path ="/beach" component={Beach}/>
              <Route path ="/bird" component={Bird}/>
              <Route path ="/food" component={Food}/>
              <Route path ="/error" component={Nodata}/>
              <Route path ="/mountain" component={Mountain}/>
      </Switch>
    
    </div>
    
  );
}

export default withRouter(App);
