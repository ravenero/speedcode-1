import {StyleSheet} from 'react-native';
import {COLOR_WHITE} from '../../../utils/colors';

const styles = StyleSheet.create({
  img: {
    width: 222,
    height: 272,
  },
  container: {
    alignItems: 'flex-end',
    paddingVertical: 20,
    paddingHorizontal: 12,
  },
  boxDistance: {
    backgroundColor: 'rgba(0,0,0,.6)',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 12,
  },
  contentDistance: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleDistance: {
    color: COLOR_WHITE,
    fontSize: 12,
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  boxContent: {
    backgroundColor: 'rgba(0,0,0,.3)',
    paddingVertical: 20,
    paddingHorizontal: 12,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  titleContent: {
    color: COLOR_WHITE,
    fontWeight: 'bold',
    fontSize: 18,
  },
  subtitleContent: {
    color: '#FFFFFF',
    fontSize: 12,
  },
});

export default styles;
