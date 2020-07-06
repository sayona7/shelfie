import React, { Component } from 'react';

class Product extends Component {
    constructor(props) {
        super(props);

    this.state = {  }
    }


    render() { 
        
        return ( 
            <div>
                <div>
                    Img here
                    {this.props.image}</div>
                <p> Name here
                    {this.props.name}</p>
                <p> Price here
                    {this.props.price}</p>
            </div>
         );
    }
}
 
export default Product;