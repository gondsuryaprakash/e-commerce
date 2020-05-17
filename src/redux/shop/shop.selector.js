import { createSelector } from 'reselect';

const selectorShop = (state) => state.shop;
export const selsectCollections = createSelector(
  [selectorShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selsectCollections],
  (collections) => Object.keys(collections).map((key) => collections[key])
);
export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [selsectCollections],
    (collections) => collections[collectionUrlParam]
  );
