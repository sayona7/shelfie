import React, { Component } from 'react';
import Product from '../Product/Product';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    



    render() { 
        let list = this.props.inventoryList;
        let productList = list.map((product, i) => <Product key={i} product={product} /> );

        return ( 
            <div className="dashboard">
                {productList}
            </div>
         );
    }
}
 
export default Dashboard;