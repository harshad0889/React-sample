import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Header,Footer} from './Home';




function dis(name){
  return <h1>{name}</h1>
}

function App() {

 var x =5;


  return (
<React.Fragment>
<Header/>
<Footer/>

</React.Fragment>
  );
}

export default App;
