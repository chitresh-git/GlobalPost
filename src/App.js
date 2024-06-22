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
      {/* <Routes>



        <Route exact path='/'  element={<NewsComp apikey={this.Newsapi} progress={this.changeProgress} key="general" country="in" category="general"/>} />


        <Route exact path='/us/technology'  element={<NewsComp apikey={this.Newsapi} progress={this.changeProgress} key="technology" country="us" category="technology"/>} />
        <Route exact path='/us/entertainment'  element={<NewsComp apikey={this.Newsapi} progress={this.changeProgress} key="entertainment" country="us" category="entertainment"/>} />
        <Route exact path='/us/sports'  element={<NewsComp apikey={this.Newsapi} progress={this.changeProgress} key="sports" country="us" category="sports"/>} />
        <Route exact path='/us/science'  element={<NewsComp apikey={this.Newsapi} progress={this.changeProgress} key="science" country="us" category="science"/>} />
        <Route exact path='/us/general'  element={<NewsComp apikey={this.Newsapi} progress={this.changeProgress} key="general" country="us" category="general"/>} />
        <Route exact path='/us/health'  element={<NewsComp apikey={this.Newsapi} progress={this.changeProgress} key="health" country="us" category="health"/>} />
        <Route exact path='/us/business'  element={<NewsComp apikey={this.Newsapi} progress={this.changeProgress} key="business" country="us" category="business"/>} />

   
        
   
        <Route exact path='/india/entertainment' element={<NewsComp apikey={this.Newsapi} progress={this.changeProgress} key="ine" country="in" category="entertainment" />}/>
        <Route exact path='/india/health' element={<NewsComp apikey={this.Newsapi} progress={this.changeProgress} key="inh" country="in" category="health" />}/>
        <Route exact path='/india/sports' element={<NewsComp apikey={this.Newsapi} progress={this.changeProgress} key="ins" country="in" category="sports" />}/>
        <Route exact path='/india/science' element={<NewsComp apikey={this.Newsapi} progress={this.changeProgress} key="insc" country="in" category="science" />}/>
        <Route exact path='/india/technology' element={<NewsComp apikey={this.Newsapi} progress={this.changeProgress} key="int" country="in" category="technology" />}/>
        <Route exact path='/india/business' element={<NewsComp apikey={this.Newsapi} progress={this.changeProgress} key="inb" country="in" category="business" />}/>
        <Route exact path='/india/general' element={<NewsComp apikey={this.Newsapi} progress={this.changeProgress} key="ingn" country="in" category="general" />}/>

        
        <Route exact path='/india'  element={<NewsComp apikey={this.Newsapi} progress={this.changeProgress} key="in" country="in" category="general" />}/>
        <Route exact path='/us'  element={<NewsComp apikey={this.Newsapi} progress={this.changeProgress} key="us" country="us" category="general"/>} />
        <Route exact path='/china' element={<NewsComp apikey={this.Newsapi} progress={this.changeProgress} key="cn" country="cn" category="general" />}/>
        <Route exact path='/uk' element={<NewsComp apikey={this.Newsapi} progress={this.changeProgress} key="bw" country="gb" category="general" />}/>
        <Route exact path='/france' element={<NewsComp apikey={this.Newsapi} progress={this.changeProgress} key="ine12" country="fr" category="general" />}/>
        <Route exact path='/russia' element={<NewsComp apikey={this.Newsapi} progress={this.changeProgress} key="inh12" country="ru" category="general" />}/>
        <Route exact path='/japan' element={<NewsComp apikey={this.Newsapi} progress={this.changeProgress} key="insc12" country="jp" category="general" />}/>
        <Route exact path='/australia' element={<NewsComp apikey={this.Newsapi} progress={this.changeProgress} key="ins12" country="au" category="general" />}/>
        <Route exact path='/world' element={<NewsComp apikey={this.Newsapi} progress={this.changeProgress} key="int12" country="" category="general" />}/>
       
      </Routes> */}
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
