import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selectors';
import { firestore } from '../../firebase/firebase.utils'

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './collection.styles';

const CollectionPage = ({ collection }) => {
  //exemple use effect with life cicle mount and unmount
  // useEffect(()=>{
  //   // like mount life cicle in class
  //   const unsubscribeFromCollections  = firestore.collection('collections').onSnapshot(snapshot => console.log(snapshot))
  //   return () => { // like unmount life cicle in class
  //     unsubscribeFromCollections()
  //   }
  // }, [])
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);

//selectCollection(ownProps.match.params.collectionId)(state)