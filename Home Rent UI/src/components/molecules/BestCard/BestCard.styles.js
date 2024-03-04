import {StyleSheet} from 'react-native';
import {COLOR_GRAY, COLOR_PRIMARY, COLOR_WHITE} from '../../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  img: {
    borderRadius: 12,
    width: 122,
    height: 78,
  },
  wrapper: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  containerPrice: {
    flex: 1,
  },
  textPrice: {
    color: COLOR_PRIMARY,
  },
  containerInfo: {
    justifyContent: 'flex-end',
    flex: 1,
  },
  wrapperInfo: {
    flexDirection: 'row',
  },
  contentInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInfo: {
    color: COLOR_GRAY,
  },
});

export default styles;
