import React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import {ICON_LOCATION, PIC_1, PIC_2} from '../../../assets';
import {Gap} from '../..';
import styles from './NearCard.styles';

const NearCard = props => {
  const {title, address, distance, img, onPress} = props;

  return (
    <TouchableOpacity onPress={() => onPress()}>
      <View>
        <ImageBackground source={img} borderRadius={20} style={styles.img}>
          <View style={styles.container}>
            <View style={styles.boxDistance}>
              <View style={styles.contentDistance}>
                <Image source={ICON_LOCATION} />
                <Gap width={6} />
                <Text style={styles.titleDistance}>{distance} KM</Text>
              </View>
            </View>
          </View>
          <View style={styles.content}>
            <View style={styles.boxContent}>
              <Text style={styles.titleContent}>{title}</Text>
              <Gap height={4} />
              <Text style={styles.subtitleContent}>{address}</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

export default NearCard;

NearCard.propTypes = {
  title: PropTypes.string,
  address: PropTypes.string,
  distance: PropTypes.string,
  img: PropTypes.string,
  onPress: PropTypes.func,
};

NearCard.defaultProps = {
  title: '',
  address: '',
  distance: '',
  img: PIC_1,
  onPress: () => {},
};
