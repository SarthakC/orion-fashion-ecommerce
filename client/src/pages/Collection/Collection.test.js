import React from 'react';
import { shallow } from 'enzyme';

import { Collection } from './Collection';
import CollectionItem from '../../components/CollectionItem/CollectionItem';

describe('Collection', () => {
  let wrapper;
  let mockItems = [{ id: 1 }, { id: 2 }, { id: 3 }];
  beforeEach(() => {
    const mockCollection = {
      items: mockItems,
      title: 'Test',
    };

    wrapper = shallow(<Collection collection={mockCollection} />);
  });

  it('should render the CollectionPage component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the same number of CollectionItems as collection array', () => {
    expect(wrapper.find(CollectionItem).length).toBe(mockItems.length);
  });
});
