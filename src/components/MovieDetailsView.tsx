import React from 'react';
import {Text, View, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {IMovieDetailsView} from '../interfaces/detailsInterface';
import {styles} from '../theme/theme';
import {currencyFormat} from '../utils';
import {CastItem} from './CastItem';

export const MovieDetailsView = ({movieFull, cast}: IMovieDetailsView) => {
  return (
    <>
      {/* Detalles */}
      <View style={styles.movieDetailsContainer}>
        <View style={styles.movieDetailsVoteAverage}>
          <Icon name="star-outline" color="grey" size={16} />

          <Text>{movieFull.vote_average}</Text>

          <Text> - {movieFull.genres.map(genre => genre.name).join(', ')}</Text>
        </View>
        {/* Historia */}
        <Text style={styles.movieDetailsSectionsTitle}>Historia</Text>
        <Text style={styles.movieDetailsSectionsSubTitle}>
          {movieFull.overview}
        </Text>
        {/* Presupuesto */}
        <Text style={styles.movieDetailsSectionsTitle}>Presupuesto</Text>
        <Text style={styles.movieDetailsSectionsSubTitle}>
          {currencyFormat(movieFull.budget)}
        </Text>
        {/* Casting */}
        <View style={styles.movieDetailsCastingContainer}>
          <Text style={styles.movieDetailsSectionsTitle}>Actores</Text>

          <FlatList
            data={cast}
            renderItem={({item}: any) => <CastItem actor={item} />}
            keyExtractor={item => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.MovieDetailsCastingList}
          />
        </View>
      </View>
      {/* Casting */}
    </>
  );
};
