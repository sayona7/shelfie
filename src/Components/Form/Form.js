import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
    super(props);
    
    this.state = { 
        imageURL: "",
        productName: "",
        price: 0 
    }
}


    handleUrl = (value) => {
        this.setState({
            imageURL: value
        })
    }

    handleName = (value) => {
        this.setState({
            productName: value
        })
    }

    handlePrice = (value) => {
        this.setState({
            price: value
        })
    }

    handleCancel = (e) => {
        this.setState({
            imageURL: "",
            productName: "",
            price: 0
        })
        console.log("cancel btn pressed");
       }


    render() { 
        return ( 
            <div className="flex-div form-div">
                <div>
                </div>
                <p>Image URL:</p>
                <input type="text" value={this.state.imageURL} onChange={e => this.handleUrl(e.target.value)} />
                <p> Product Name:</p>
                <input type="text" value={this.state.productName} onChange={e => this.handleName(e.target.value)} />
                <p>Price:</p>
                <input type="text" value={this.state.price} onChange={e => this.handlePrice(e.target.value)} />
                <div>
                    <button onClick = { (e) => this.handleCancel(e) }>Cancel</button>
                    <button>Add to Inventory</button>
                </div>
            </div>
         );
    }
}
 
export default Form;