import React, {createContext} from 'react';
import {Image, ScrollView, Text, TextInput, View} from 'react-native';
import {
  ICON_BELL,
  ICON_CHEVRON_DOWN,
  ICON_FILTER,
  ICON_SEARCH,
  PIC_1,
  PIC_2,
  PIC_3,
  PIC_4,
  PIC_5,
} from '../../assets';
import {BestCard, FilterList, Gap, NearCard} from '../../components';
import {useNavigation} from '@react-navigation/native';
import styles from './Home.styles';

let contextValue = {};
const HomeContext = createContext(contextValue);

const Home = () => {
  const navigation = useNavigation();

  return (
    <HomeContext.Provider value={contextValue}>
      <View style={styles.page}>
        <View style={styles.header}>
          <View style={styles.contentHeader}>
            <View>
              <Text style={styles.subtitleHeader}>Location</Text>
              <Gap height={4} />
              <View style={styles.containerHeader}>
                <Text style={styles.titleHeader}>Jakarta</Text>
                <Gap width={8} />
                <Image source={ICON_CHEVRON_DOWN} />
              </View>
            </View>
            <View>
              <Image source={ICON_BELL} />
            </View>
          </View>
        </View>
        <Gap height={20} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wrapper}>
            <View style={styles.containerInput}>
              <TextInput
                style={styles.input}
                placeholder="Search address, or near you"
              />
              <View style={styles.iconInput}>
                <Image source={ICON_SEARCH} />
              </View>
              <Gap width={8} />
              <View style={styles.buttonFilter}>
                <Image source={ICON_FILTER} />
              </View>
            </View>
          </View>
          <Gap height={20} />
          <View style={styles.wrapper}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.containerNear}>
                <FilterList title="Home" isActive={true} />
                <Gap width={8} />
                <FilterList title="Apartement" isActive={false} />
                <Gap width={8} />
                <FilterList title="Hotel" isActive={false} />
                <Gap width={8} />
                <FilterList title="Vila" isActive={false} />
                <Gap width={8} />
                <FilterList title="Cotage" isActive={false} />
              </View>
            </ScrollView>
          </View>
          <Gap height={20} />
          <View style={styles.wrapper}>
            <View>
              <View style={styles.containerSection}>
                <Text style={styles.sectionTitle}>Near for you</Text>
                <Text style={styles.sectionSubtitle}>See more</Text>
              </View>
              <Gap height={12} />
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.containerNear}>
                  <NearCard
                    title="Dreamsville House"
                    address="Jl. Sultan Iskandar Muda"
                    img={PIC_1}
                    distance="1.8"
                    onPress={() => navigation.navigate('Details')}
                  />
                  <Gap width={12} />
                  <NearCard
                    title="Ascot House"
                    address="Jl. Cilandak Tengah"
                    img={PIC_2}
                    distance="2.8"
                  />
                </View>
              </ScrollView>
            </View>
          </View>
          <Gap height={20} />
          <View style={styles.wrapper}>
            <View style={styles.containerSection}>
              <Text style={styles.sectionTitle}>Best for you</Text>
              <Text style={styles.sectionSubtitle}>See more</Text>
            </View>
            <Gap height={12} />
            <BestCard
              title="Orchad House"
              price={2500000000}
              bedroom={6}
              bathroom={4}
              img={PIC_3}
            />
            <Gap height={20} />
            <BestCard
              title="The Hollies House"
              price={2000000000}
              bedroom={5}
              img={PIC_4}
              bathroom={2}
            />
            <Gap height={20} />
            <BestCard
              title="Sea Breezes House"
              price={3000000000}
              bedroom={6}
              img={PIC_5}
              bathroom={3}
            />
          </View>
          <Gap height={50} />
        </ScrollView>
      </View>
    </HomeContext.Provider>
  );
};

export default Home;
