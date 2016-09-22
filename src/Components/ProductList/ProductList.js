import React, {Component} from 'react';
import Product from '../Product';

var products = [
  { name: 'Product1' },
  { name: 'Product2' },
  { name: 'Product3' },
  { name: 'Product4' },
  { name: 'Product5' },
];

export default class ProductList extends Component {

  render() {
    var items = (products.map((product, idx) => {
      return <Product key={idx} product={product}/>;
    }));

    return (
      <div>
        { items }
      </div>
    );
  }
}
