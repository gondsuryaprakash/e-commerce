import React, { Component } from 'react';
import MenItem from '../menu-item.component.jsx';
import './directory.styles.scss';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectDirectorySections } from '../../../redux/directory/directory.selector';
const Directory = ({ sections }) => (
  <div className='directory-menu'>
    {sections.map(({ title, imageUrl, size, id, linkUrl }) => (
      <MenItem
        key={id}
        title={title}
        imageUrl={imageUrl}
        size={size}
        linkUrl={linkUrl}
      ></MenItem>
    ))}
  </div>
);

const mapStaeToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStaeToProps)(Directory);
