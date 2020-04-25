import React, { Component } from 'react';
import shop_Data from './shop.data';
import CollectionPreview from '../../components/priview-collection/collection-preview.component.jsx';
export default class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: shop_Data,
    };
  }
  render() {
    return (
      <div>
        {this.state.collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}
