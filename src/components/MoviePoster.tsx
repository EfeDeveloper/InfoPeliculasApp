import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {IMoviePoster} from '../interfaces/moviePosterInterface';
import {styles} from '../theme/theme';

const MoviePoster = ({movie, width = 300, height = 420}: IMoviePoster) => {
  const uri = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;
  const navigation = useNavigation<StackNavigationProp<any>>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('DetailScreen', movie)}
      activeOpacity={0.8}
      style={{...styles.moviePosterView, width, height}}>
      <View style={styles.moviePosterShadow}>
        <Image source={{uri}} style={styles.moviePosterImage} />
      </View>
    </TouchableOpacity>
  );
};

export default MoviePoster;
