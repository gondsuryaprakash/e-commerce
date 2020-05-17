import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selsectCollections } from '../../redux/shop/shop.selector';
import CollectionOverview from '../../components/collection-overview/collection.overview.component';
import { Route } from 'react-router-dom';
import CollectionPage from '../category/collection.component.jsx';
const ShopPage = ({ match }) => (
  <div>
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route
      path={`${match.path}/:collectionId`}
      component={CollectionPage}
    ></Route>
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selsectCollections,
});
export default connect(mapStateToProps)(ShopPage);
