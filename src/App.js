import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from "./Components/Dashboard/Dashboard";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";
import Product from "./Components/Product/Product";

class App extends Component {
  constructor(props) {
    super(props);

  this.state = { 
    inventoryList: [
      {
        name: "Shoes",
        price: 49.99,
        image: "some img"
      },
       {
        name: "Scarf",
        price: 29.99,
        image: "some img"
      }
    ]
   }
  }

  componentDidMount() {

  }

  getList() {
    
  }

  render() { 
    return ( 
      <div>
        <Header />
        <div>
          <Form />
          <Dashboard 
          inventoryList={this.state.inventoryList} />
        </div>
      </div>
     );
  }
}
 

export default App;
