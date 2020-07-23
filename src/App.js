import React from 'react';
import './App.scss';
import Navbar from './components/homepage/navbar'
import 'bootstrap/dist/css/bootstrap.min.css';

import SearchBar from './components/homepage/searchbar';
class App extends React.Component {
    state = {
      contacts: []
    }
  render(){
  return (
    <div className="App">
        <Navbar />
        < SearchBar />
    </div>
  );
}}

export default App;
