import React, { Component } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
 
import monuments from './components/monuments';
import dances from './components/dances';
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
             <Route path="/dances" component={dances} exact/>

           
           </Switch>
           <h1>you can navigate to any page through this page</h1>
        </div> 
      </BrowserRouter>
     
    );
  }
}
 
export default App;