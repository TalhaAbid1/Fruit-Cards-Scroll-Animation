import React, {memo} from 'react';
import {StyleSheet, Text, Image} from 'react-native';
import {Fonts} from '../assets/fonts';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';

const ItemCard = ({item, viewableItems}) => {
  const reanimatedStyle = useAnimatedStyle(() => {
    const isVisible = Boolean(
      viewableItems.value
        .filter(item => item.isViewable)
        .find(viewableItem => viewableItem.item.name === item.name),
    );

    return {
      opacity: withTiming(isVisible ? 1 : 0),
      transform: [
        {
          scale: withTiming(isVisible ? 1 : 0.5),
        },
      ],
    };
  });

  return (
    <Animated.View
      style={[
        styles.eachItemViewStyle,
        {backgroundColor: item.color[0], shadowColor: item.color[1]},
        reanimatedStyle,
      ]}>
      <Image source={item.Image} style={styles.imageStyle} />
      <Text style={styles.headingTextStyle}>{item.name}</Text>
      <Text style={styles.benefitsTextStyle}>{item.benefits}</Text>
    </Animated.View>
  );
};

export default memo(ItemCard);

const styles = StyleSheet.create({
  eachItemViewStyle: {
    height: '90%',
    width: 250,
    marginHorizontal: 10,
    paddingHorizontal: 20,
    paddingVertical: 40,
    borderRadius: 20,
    // SHADOW
    shadowRadius: 40,
    shadowOffset: {width: 50, height: 60},
    shadowOpacity: 0.9,
    overflow: 'hidden',
  },
  imageStyle: {
    height: 230,
    width: 230,
    resizeMode: 'contain',
  },
  headingTextStyle: {
    fontFamily: Fonts.Bold,
    fontSize: 20,
    color: '#000',
  },
  benefitsTextStyle: {
    fontFamily: Fonts.Regular,
    fontSize: 16,
    color: '#000',
  },
});
