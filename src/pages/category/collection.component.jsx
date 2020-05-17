import React from 'react';
import './collection.style.scss';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selector';
import { createStructuredSelector } from 'reselect';
import CollectionItem from '../../components/collection/collection-itemcomponent.jsx';
const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  //localhost:3001/shop/hats
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
