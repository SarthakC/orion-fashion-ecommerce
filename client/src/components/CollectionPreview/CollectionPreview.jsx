import React from 'react';
import CollectionItem from '../CollectionItem/CollectionItem';

import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer,
} from './CollectionPreviewStyles';

export const CollectionPreview = ({
  title,
  items,
  history,
  match,
  routeName,
}) => {
  return (
    <CollectionPreviewContainer>
      <TitleContainer
        onClick={() => history.push(`${match.path}/${routeName}`)}
      >
        {title.toUpperCase()}
      </TitleContainer>
      <PreviewContainer>
        {items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
};

export default CollectionPreview;
