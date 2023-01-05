import React from 'react';
import {ActivityIndicator, Dimensions, View, ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import MoviePoster from '../components/MoviePoster';
import {useMovies} from '../hooks/useMovies';
import {styles} from '../theme/theme';
// @ts-ignore
import Carousel from 'react-native-snap-carousel-deprecated-prop-types';
import HorizontalSlider from '../components/HorizontalSlider';

const {width: windowWidth} = Dimensions.get('window');

const HomeScreen = () => {
  const {isLoading, peliculasCartelera} = useMovies();
  const {top} = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View style={styles.HomeScreenActivityIndicator}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={{marginTop: top + 20}}>
        {/* Carrousel principal */}
        <View style={styles.HomeScreenViewPrincipal}>
          <Carousel
            data={peliculasCartelera}
            renderItem={({item}: any) => <MoviePoster movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={300}
          />
        </View>
        {/* Peliculas populares */}
        <HorizontalSlider title="En cartelera" movies={peliculasCartelera} />
        {/* Peliculas mas Populares */}
        <HorizontalSlider title="Populares" movies={peliculasCartelera} />
        {/* Peliculas mejor calificadas */}
        <HorizontalSlider
          title="Mejor calificadas"
          movies={peliculasCartelera}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
