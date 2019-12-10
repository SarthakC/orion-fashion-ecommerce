import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionLoaded } from '../../redux/shop/shopSelectors';
import WithSpinner from '../../components/WithSpinner/WithSpinner';
import Category from '../Collection/Collection';

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionLoaded(state),
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner,
)(Category);

export default CollectionPageContainer;
