import React, { Component } from 'react'
import './App.css';

import Navbar from './component/Navbar';
import NewsComp from './component/NewsComp';
import LoadingBar from 'react-top-loading-bar'
import About from './component/About';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


export class App extends Component {

  state={
    progress:0 // declaring the state for progress bar 
  }
  
  changeProgress=(value)=>{ // function which will change the state of progress 
    this.setState({progress:value})
  }


  generateRoutes = (routes) => {
    return routes.map((route) => (
      <Route
        key={route.key}
        exact
        path={route.path}
        element={
          <NewsComp
            apikey={this.Newsapi}
            progress={this.changeProgress}
            key={route.key}
            country={route.country}
            category={route.category}
          />
        }
      />
    ));
  };

  render() {
    const routes = [
      { path: '/', key: 'general', country: 'in', category: 'general' },
      { path: '/\'', key: 'general', country: 'in', category: 'general' },
      { path: '/IndoreTimes', key: 'general', country: 'in', category: 'general' },
      { path: '/us/technology', key: 'technology', country: 'us', category: 'technology' },
      { path: '/us/entertainment', key: 'entertainment', country: 'us', category: 'entertainment' },
      { path: '/us/sports', key: 'sports', country: 'us', category: 'sports' },
      { path: '/us/science', key: 'science', country: 'us', category: 'science' },
      { path: '/us/general', key: 'general-us', country: 'us', category: 'general' },
      { path: '/us/health', key: 'health', country: 'us', category: 'health' },
      { path: '/us/business', key: 'business', country: 'us', category: 'business' },
      { path: '/india/entertainment', key: 'ine', country: 'in', category: 'entertainment' },
      { path: '/india/health', key: 'inh', country: 'in', category: 'health' },
      { path: '/india/sports', key: 'ins', country: 'in', category: 'sports' },
      { path: '/india/science', key: 'insc', country: 'in', category: 'science' },
      { path: '/india/technology', key: 'int', country: 'in', category: 'technology' },
      { path: '/india/business', key: 'inb', country: 'in', category: 'business' },
      { path: '/india/general', key: 'ingn', country: 'in', category: 'general' },
      { path: '/india', key: 'in', country: 'in', category: 'general' },
      { path: '/us', key: 'us', country: 'us', category: 'general' },
      { path: '/china', key: 'cn', country: 'cn', category: 'general' },
      { path: '/uk', key: 'bw', country: 'gb', category: 'general' },
      { path: '/france', key: 'ine12', country: 'fr', category: 'general' },
      { path: '/russia', key: 'inh12', country: 'ru', category: 'general' },
      { path: '/japan', key: 'insc12', country: 'jp', category: 'general' },
      { path: '/australia', key: 'ins12', country: 'au', category: 'general' },
      { path: '/world', key: 'int12', country: 'world', category: 'general' },
    ];
 
    return (
      <>
        
        {/* using the react router for routing  */}
       <Router>  
        <LoadingBar  // this tag is imported from the npm package named as react-top-loading-bar
        color='white' // color of bar
        height={3} // this will decide the height of progress bar
        // shadow={true}
        transitionTime={500} // the time taken by the progress bar to get fade in mili second
        progress={this.state.progress} 
      />
        <Navbar />         {/* navbar component */}

 {/* we have to use exact and key so that the page will remounted accoring to the request of the user, key is the most prop if we doesnt pass it then page remains unchanged and our application wont work  */}
      
       

         <Routes>
          {this.generateRoutes(routes)}
          <Route exact path='/about' element={<About />} />
          </Routes>
    
       </Router>
      </>
    )
  }
}

export default App
