import React from 'react';
import {Dimensions, Image, Text, View, ScrollView} from 'react-native';
import {IdetailScreen} from '../interfaces/detailsInterface';
import {styles} from '../theme/theme';
import {moviePosterPath} from '../utils';
import Icon from 'react-native-vector-icons/Ionicons';

const screenHeight = Dimensions.get('screen').height;

const DetailScreen = ({route}: IdetailScreen) => {
  const movie = route.params;
  const uri = moviePosterPath(movie.poster_path);

  return (
    <ScrollView>
      <View
        style={{
          ...styles.detailImageMainContainer,
          height: screenHeight * 0.7,
        }}>
        <View
          style={{
            ...styles.detailImageBorder,
          }}>
          <Image source={{uri}} style={styles.detailPosterImage} />
        </View>
      </View>
      <View style={styles.movieDetailsContainer}>
        <Text style={styles.movieDetailsTitle}>{movie.original_title}</Text>
        <Text style={styles.movieDetailsSubTitle}>{movie.title}</Text>
        <Icon name="game-controller-outline" color="grey" size={50} />
      </View>
    </ScrollView>
  );
};

export default DetailScreen;
