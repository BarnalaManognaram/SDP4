import React, { Component } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
 
import monuments from './components/monuments';
import dances from './components/dances';
import emperor from './components/emperor';
import signup from './components/signup';
import food from './components/food';
import login from './components/login';
import Navigation from './components/Navigation';
import { Switch } from 'react-router-dom';
 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/monuments" component={monuments} exact/>
             <Route path="/dances" component={dances} />
             <Route path='/emperor' component={emperor} />
             <Route path='/signup' component={signup} />
             <Route path='/food' component={food} />
             <Route path='/login' component={login} />
             

           
           </Switch>
         
        </div> 
      </BrowserRouter>
     
    );
  }
}
 
export default App;