import React, { Component } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
 
import monuments from './components/monuments';
import logout from './components/logout';
import packages from './components/packages';
import tourist from './components/tourist';
import dances from './components/dances';
import emperor from './components/emperor';
import signup from './components/signup';
import food from './components/food';
import login from './components/login';
import Navigation from './components/Navigation';
import { Switch,Redirect } from 'react-router-dom';


class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
       
            <Switch>
       
            <Route exact path="/" render={() => <Redirect to="/login" />} />
            <Route exact path="/(login)" component={login}/>
             <Route path="/monuments" component={monuments}  ></Route>
             <Route path='/tourist' component={tourist} />
             <Route path="/dances" component={dances} />
             <Route path='/emperor' component={emperor} />
             <Route path='/signup' component={signup} />
             <Route path='/food' component={food} />
          
             <Route path='/packages' component={packages} />
             <Route path='/logout' component={logout} />
             
            
           </Switch>
         
        </div> 
      </BrowserRouter>
     
    );
  }
}
 
export default App;