import React from 'react';
import {Text, View} from 'react-native';
import PropTypes from 'prop-types';
import styles from './FilterList.styles';

const FilterList = props => {
  const {title, isActive} = props;

  return (
    <View style={styles.box(isActive)}>
      <Text style={styles.title(isActive)}>{title}</Text>
    </View>
  );
};

export default FilterList;

FilterList.propTypes = {
  title: PropTypes.string,
  isActive: PropTypes.bool,
};

FilterList.defaultProps = {
  title: 'Home',
  isActive: false,
};
