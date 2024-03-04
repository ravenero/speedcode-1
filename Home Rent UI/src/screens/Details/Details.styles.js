import {StyleSheet, Platform} from 'react-native';
import {
  COLOR_BLACK,
  COLOR_DIVIDER,
  COLOR_GRAY,
  COLOR_PRIMARY,
  COLOR_WHITE,
} from '../../utils/colors';

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
  },
  imgBackground: {
    width: '100%',
    height: 300,
  },
  wrapper: {
    flex: 1,
  },
  containerHeader: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    justifyContent: 'space-between',
  },
  wrapperHeader: {
    paddingTop: Platform.OS === 'android' ? 16 : 50,
  },
  box: {
    backgroundColor: 'rgba(0,0,0,.6)',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
  },
  contentHeader: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  overlayHeader: {
    backgroundColor: 'rgba(0,0,0,.4)',
    paddingBottom: 12,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  titleHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  subtitleHeader: {
    fontSize: 12,
    color: '#FFFFFF',
  },
  containerInfo: {
    flexDirection: 'row',
  },
  contentInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  boxInfo: {
    backgroundColor: 'rgba(0,0,0,.4)',
    padding: 8,
    borderRadius: 6,
  },
  textInfo: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  wrapperContent: {
    paddingHorizontal: 12,
  },
  containerAvatar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentAvatar: {
    flex: 1,
  },
  titleAvatar: {
    color: COLOR_BLACK,
    fontWeight: 'bold',
  },
  subtitleAvatar: {
    fontSize: 13,
    color: COLOR_GRAY,
  },
  boxIconAvatar: {
    backgroundColor: COLOR_PRIMARY,
    padding: 10,
    borderRadius: 8,
  },
  sectionTitle: {
    fontSize: 20,
    color: COLOR_BLACK,
  },
  containerGallery: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contentGallery: {
    flex: 1,
  },
  imgGallery: {
    borderRadius: 12,
    width: '100%',
  },
  description: {
    color: COLOR_GRAY,
  },
  containerBottomBar: {
    paddingBottom: Platform.OS === 'android' ? 12 : 34,
    paddingTop: 12,
    paddingHorizontal: 12,
    borderTopColor: COLOR_DIVIDER,
    borderTopWidth: 1,
  },
  wrapperBottomBar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentBottomBar: {
    flex: 1,
  },
  subtitleBottomBar: {
    color: COLOR_GRAY,
  },
  titleBottomBar: {
    color: COLOR_BLACK,
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonBottomBar: {
    backgroundColor: COLOR_PRIMARY,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
  },
  textButtonBottomBar: {
    color: COLOR_WHITE,
  },
});

export default styles;
