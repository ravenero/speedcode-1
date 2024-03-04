import React from 'react';
import {View} from 'react-native';
import {COLOR_DIVIDER} from '../../../utils/colors';
import PropTypes from 'prop-types';

const Divider = props => {
  const {color, height} = props;
  return (
    <View
      style={{borderWidth: 0.5, borderColor: color, marginVertical: height}}
    />
  );
};

export default Divider;

Divider.propTypes = {
  color: PropTypes.string,
  height: PropTypes.number,
};

Divider.defaultProps = {
  color: COLOR_DIVIDER,
  height: 0,
};
