import {StyleSheet, Platform} from 'react-native';
import {
  COLOR_BLACK,
  COLOR_GRAY,
  COLOR_PRIMARY,
  COLOR_WHITE,
} from '../../utils/colors';

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLOR_WHITE,
  },
  header: {
    paddingTop: Platform.OS === 'android' ? 16 : 45,
    paddingHorizontal: 12,
  },
  contentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  subtitleHeader: {
    color: COLOR_GRAY,
  },
  containerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleHeader: {
    fontSize: 18,
    color: COLOR_BLACK,
  },
  wrapper: {
    paddingHorizontal: 12,
  },
  containerInput: {
    flexDirection: 'row',
  },
  input: {
    backgroundColor: '#F7F7F7',
    paddingVertical: Platform.OS === 'android' ? 8 : 14,
    paddingHorizontal: 12,
    borderRadius: 8,
    flex: 1,
    paddingLeft: 40,
  },
  iconInput: {
    position: 'absolute',
    flex: 1,
    height: '100%',
    paddingHorizontal: 12,
    justifyContent: 'center',
  },
  contentInput: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  placeHolder: {
    color: COLOR_GRAY,
  },
  buttonFilter: {
    backgroundColor: COLOR_PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 14,
    borderRadius: 12,
  },
  containerNear: {
    flexDirection: 'row',
  },
  containerSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    fontSize: 20,
    color: COLOR_BLACK,
  },
  sectionSubtitle: {
    color: COLOR_GRAY,
    fontSize: 12,
  },
});

export default styles;
