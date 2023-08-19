
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

import {
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import NotFound from './components/NotFound';

export default class App extends Component {
  
  render() {
    
    return (
      <div>
    <BrowserRouter>
    <NavBar/>
        <Routes>
            <Route exact path="/" element={<News key="general"  country="in" category="general" />} /> 
            <Route exact path="/NewsBytess" element={<News key="general"  country="in" category="general" />} /> 
            <Route exact path="/general" element={<News key="general"  country="in" category="general" />} />
            <Route exact path="/sports" element={<News key="sports"  country="in" category="sports" />} />
            <Route exact path="/science" element={<News key="science"  country="in" category="science" />} />
            <Route exact path="/entertainment" element={<News key="entertainment"  country="in" category="entertainment" />} />
            <Route exact path="/business" element={<News key="business"  country="in" category="business" />}/>
            <Route exact path="/technology" element={<News key="technology"  country="in" category="technology" />} />
            <Route exact path="/health" element={<News key="health"  country="in" category="health" />} />

            <Route exact path="*" element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>
      </div>
    )
  }
}
