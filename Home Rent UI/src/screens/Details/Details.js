import React, {createContext} from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  AVATAR,
  GALLERY_1,
  GALLERY_2,
  GALLERY_3,
  GALLERY_4,
  ICON_BATHROOM_2,
  ICON_BEDROOM_2,
  ICON_BOOKMARK,
  ICON_CHAT,
  ICON_CHEVRON_LEFT,
  ICON_PHONE,
  PIC_1,
} from '../../assets';
import {Gap} from '../../components';
import {useNavigation} from '@react-navigation/native';
import styles from './Details.styles';
import {currencyParser} from '../../utils/helpers';

let contextValue = {};
const DetailsContext = createContext(contextValue);

const Details = () => {
  const navigation = useNavigation();

  return (
    <DetailsContext.Provider value={contextValue}>
      <View style={styles.page}>
        <View style={styles.container}>
          <View>
            <ImageBackground source={PIC_1} style={styles.imgBackground}>
              <View style={styles.wrapper}>
                <View style={styles.containerHeader}>
                  <View style={styles.wrapperHeader}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                      <View style={styles.box}>
                        <Image source={ICON_CHEVRON_LEFT} />
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.wrapperHeader}>
                    <View style={styles.box}>
                      <Image source={ICON_BOOKMARK} />
                    </View>
                  </View>
                </View>
                <View style={styles.contentHeader}>
                  <View style={styles.overlayHeader}>
                    <Text style={styles.titleHeader}>Dreamsville House</Text>
                    <Gap height={4} />
                    <Text style={styles.subtitleHeader}>
                      Jl. Sultan Iskandar Muda, Jakarta selatan
                    </Text>
                    <Gap height={20} />
                    <View style={styles.containerInfo}>
                      <View style={styles.contentInfo}>
                        <View style={styles.boxInfo}>
                          <Image source={ICON_BEDROOM_2} />
                        </View>
                        <Gap width={8} />
                        <Text style={styles.textInfo}>6 Bedroom</Text>
                      </View>
                      <Gap width={20} />
                      <View style={styles.contentInfo}>
                        <View style={styles.boxInfo}>
                          <Image source={ICON_BATHROOM_2} />
                        </View>
                        <Gap width={8} />
                        <Text style={styles.textInfo}>4 Bathroom</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </ImageBackground>
            <Gap height={20} />
            <View style={styles.wrapperContent}>
              <Text style={styles.sectionTitle}>Description</Text>
              <Gap height={12} />
              <Text style={styles.description}>
                The 3 level house that has a modern design, has a large pool and
                a garage that fits up to four cars...
              </Text>
            </View>
            <Gap height={20} />
            <View style={styles.wrapperContent}>
              <View style={styles.containerAvatar}>
                <Image source={AVATAR} />
                <Gap width={6} />
                <View style={styles.contentAvatar}>
                  <Text style={styles.titleAvatar}>Garry Owel</Text>
                  <Gap height={4} />
                  <Text style={styles.subtitleAvatar}>Owner</Text>
                </View>
                <View style={styles.boxIconAvatar}>
                  <Image source={ICON_PHONE} />
                </View>
                <Gap width={8} />
                <View style={styles.boxIconAvatar}>
                  <Image source={ICON_CHAT} />
                </View>
              </View>
            </View>
            <Gap height={20} />
            <View style={styles.wrapperContent}>
              <Text style={styles.sectionTitle}>Gallery</Text>
              <Gap height={12} />
              <View style={styles.containerGallery}>
                <View style={styles.contentGallery}>
                  <Image source={GALLERY_1} style={styles.imgGallery} />
                </View>
                <Gap width={8} />
                <View style={styles.contentGallery}>
                  <Image source={GALLERY_2} style={styles.imgGallery} />
                </View>
                <Gap width={8} />
                <View style={styles.contentGallery}>
                  <Image source={GALLERY_3} style={styles.imgGallery} />
                </View>
                <Gap width={8} />
                <View style={styles.contentGallery}>
                  <Image source={GALLERY_4} style={styles.imgGallery} />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.containerBottomBar}>
          <View style={styles.wrapperBottomBar}>
            <View style={styles.contentBottomBar}>
              <Text style={styles.subtitleBottomBar}>Price:</Text>
              <Gap height={4} />
              <Text style={styles.titleBottomBar}>
                {currencyParser(2500000000)} / Year
              </Text>
            </View>
            <View style={styles.buttonBottomBar}>
              <Text style={styles.textButtonBottomBar}>Rent now</Text>
            </View>
          </View>
        </View>
      </View>
    </DetailsContext.Provider>
  );
};

export default Details;
