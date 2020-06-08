import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCollectionSelection} from '../../redux/shop/shop.selector';


import './collections-overview.styles.scss';
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

const CollectionsOverview = ({collections}) => (
  <div class='collections-overview'>
    {
      collections.map(({id, ...otherProps}) => (
        <CollectionPreview key={id} {...otherProps}/>
      ))
    }
  </div>
)
const mapStateToProps = createStructuredSelector({
  collections: selectCollectionSelection
});

export default connect(mapStateToProps)(CollectionsOverview);