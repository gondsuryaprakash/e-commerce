import React from 'react';
import './collection-preview.style.scss';
import CollectionItem from '../collection/collection-itemcomponent.jsx';
const CollectionPreview = ({ title, items }) => {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...restParameter }) => (
            <CollectionItem key={id} {...restParameter} />
          ))}
      </div>
    </div>
  );
};
export default CollectionPreview;
