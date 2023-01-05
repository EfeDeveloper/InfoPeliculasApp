import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {IHorizontalSlider} from '../interfaces/horizontalSliderInterface';
import {styles} from '../theme/theme';
import MoviePoster from './MoviePoster';

const HorizontalSlider = ({title = '', movies}: IHorizontalSlider) => {
  return (
    <View
      style={
        title
          ? styles.horizontalSliderViewWithTitle
          : styles.horizontalSliderUntitledView
      }>
      <Text style={styles.popularesTitle}>{title}</Text>

      <FlatList
        data={movies}
        renderItem={({item}: any) => (
          <MoviePoster movie={item} width={140} height={200} />
        )}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default HorizontalSlider;
