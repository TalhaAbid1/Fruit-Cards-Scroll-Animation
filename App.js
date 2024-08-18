import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {Images} from './source/assets/images';
import {Fonts} from './source/assets/fonts';
import {useSharedValue} from 'react-native-reanimated';
import ItemCard from './source/components/ItemCard';
import {fruits} from './source/constants/fruits';

const App = () => {
  const viewableItems = useSharedValue([]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        {/* HEADER VIEW */}
        <View style={styles.headerView}>
          <Text style={styles.fruitsText}>FruitWise</Text>
          <Image
            source={Images.appIconImage}
            style={styles.appIconImageStyle}
          />
        </View>
        <FlatList
          data={fruits}
          keyExtractor={(item, index) => index.toString()}
          onViewableItemsChanged={({viewableItems: vItems}) => {
            viewableItems.value = vItems;
          }}
          renderItem={({item}) => {
            return <ItemCard item={item} viewableItems={viewableItems} />;
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scrollViewStyle}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#f2f2',
    backgroundColor: '#C9D0D6',
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginVertical: 40,
  },
  fruitsText: {
    fontFamily: Fonts.Bold,
    fontSize: 28,
    color: '#000',
  },
  appIconImageStyle: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
  },
  scrollViewStyle: {
    flex: 1,
  },
});
