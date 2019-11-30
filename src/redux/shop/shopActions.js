import ShopActionTypes from './shopTypes';

export const updateCollections = collectionMap => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: collectionMap,
});
