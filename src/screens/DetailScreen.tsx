import React from 'react';
import {
  Dimensions,
  Image,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {IdetailScreen} from '../interfaces/detailsInterface';
import {styles} from '../theme/theme';
import {moviePosterPath} from '../utils';
import {useDetailScreen} from '../hooks/useMovieDetail';
import {MovieDetailsView} from '../components/MovieDetailsView';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native';

const screenHeight = Dimensions.get('screen').height;

const DetailScreen = ({route, navigation}: IdetailScreen) => {
  const movie = route.params;
  const uri = moviePosterPath(movie.poster_path);
  const {isLoading, movieFull, cast} = useDetailScreen(movie.id);

  return (
    <ScrollView>
      <View
        style={{
          ...styles.detailScreenImageMainContainer,
          height: screenHeight * 0.7,
        }}>
        <View
          style={{
            ...styles.detailScreenImageBorder,
          }}>
          <Image source={{uri}} style={styles.detailPosterImage} />
        </View>
      </View>
      <View style={styles.movieDetailsContainer}>
        <Text style={styles.movieDetailsTitle}>{movie.original_title}</Text>
        <Text style={styles.movieDetailsSubTitle}>{movie.title}</Text>
      </View>

      {isLoading ? (
        <ActivityIndicator color="gray" size={35} />
      ) : (
        <MovieDetailsView movieFull={movieFull!} cast={cast} />
      )}
      {/* Close Button */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}>
        <Icon name="arrow-back-outline" color="white" size={60} />
      </TouchableOpacity>
    </ScrollView>
  );
};

export default DetailScreen;
