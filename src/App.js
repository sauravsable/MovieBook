import React, { Component } from 'react'
import './App.css';
import NavBar from './components/NavBar';
import Infor from './components/Infor';
import Footer from './components/Footer';

export default class App extends Component {
  render() {
    return (
      <div>
      <NavBar/>
      <Infor/>
      <Footer/>
      </div>
    )
  }
}
