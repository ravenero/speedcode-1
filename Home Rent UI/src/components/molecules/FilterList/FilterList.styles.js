import {StyleSheet} from 'react-native';
import {COLOR_GRAY, COLOR_PRIMARY, COLOR_WHITE} from '../../../utils/colors';

const styles = StyleSheet.create({
  box: isActive => ({
    backgroundColor: isActive ? COLOR_PRIMARY : '#F7F7F7',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  }),
  title: isActive => ({
    color: isActive ? COLOR_WHITE : COLOR_GRAY,
  }),
});

export default styles;
