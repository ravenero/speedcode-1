import React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import {
  ICON_BATHROOM,
  ICON_BEDROOM,
  ICON_LOCATION,
  PIC_1,
  PIC_2,
  PIC_3,
} from '../../../assets';
import {Gap} from '../..';
import styles from './BestCard.styles';
import {COLOR_GRAY, COLOR_PRIMARY} from '../../../utils/colors';
import {currencyParser} from '../../../utils/helpers';

const BestCard = props => {
  const {title, price, bedroom, bathroom, img} = props;

  return (
    <View style={styles.container}>
      <Image source={img} style={styles.img} />
      <Gap width={12} />
      <View style={styles.wrapper}>
        <View style={styles.content}>
          <Text>{title}</Text>
        </View>
        <Gap height={4} />
        <View style={styles.containerPrice}>
          <Text style={styles.textPrice}>{currencyParser(price)} / Year</Text>
        </View>
        <View style={styles.containerInfo}>
          <View style={styles.wrapperInfo}>
            <View style={styles.contentInfo}>
              <Image source={ICON_BEDROOM} />
              <Gap width={6} />
              <Text style={styles.textInfo}>{bedroom} Bedroom</Text>
            </View>
            <Gap width={16} />
            <View style={styles.contentInfo}>
              <Image source={ICON_BATHROOM} />
              <Gap width={6} />
              <Text style={styles.textInfo}>{bathroom} Bathroom</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BestCard;

BestCard.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  bedroom: PropTypes.number,
  bathroom: PropTypes.number,
  img: PropTypes.string,
};

BestCard.defaultProps = {
  title: '',
  price: 0,
  bedroom: 0,
  bathroom: 0,
  img: PIC_1,
};
