import React from 'react';
import {ActivityIndicator, Dimensions, View, ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import MoviePoster from '../components/MoviePoster';
import {useMovies} from '../hooks/useMovies';
import {styles} from '../theme/theme';
import HorizontalSlider from '../components/HorizontalSlider';
import Carousel from 'react-native-snap-carousel';

const {width: windowWidth} = Dimensions.get('window');

const HomeScreen = () => {
  const {isLoading, nowPlaying, popular, topRated, upcoming} = useMovies();
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
            data={nowPlaying}
            renderItem={({item}: any) => <MoviePoster movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={300}
            inactiveSlideOpacity={0.9}
          />
        </View>
        {/* Peliculas mas Populares */}
        <HorizontalSlider title="Populares" movies={popular} />
        {/* Peliculas mejor calificadas */}
        <HorizontalSlider title="Mejor calificadas" movies={topRated} />
        {/* Peliculas proximas */}
        <HorizontalSlider title="Proximante" movies={upcoming} />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
