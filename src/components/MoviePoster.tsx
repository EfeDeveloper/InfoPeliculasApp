import React from 'react';
import {Image, View} from 'react-native';
import {IMoviePoster} from '../interfaces/moviePosterInterface';
import {styles} from '../theme/theme';

const MoviePoster = ({movie, width = 300, height = 420}: IMoviePoster) => {
  const uri = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;

  return (
    <View style={{...styles.moviePosterView, width, height}}>
      <View style={styles.moviePosterShadow}>
        <Image source={{uri}} style={styles.moviePosterImage} />
      </View>
    </View>
  );
};

export default MoviePoster;
