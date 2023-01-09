import React, {useContext, useEffect} from 'react';
import {ActivityIndicator, Dimensions, View, ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import MoviePoster from '../components/MoviePoster';
import {useMovies} from '../hooks/useMovies';
import {styles} from '../theme/theme';
import HorizontalSlider from '../components/HorizontalSlider';
import Carousel from 'react-native-snap-carousel';
import {GradienteBackground} from '../components/GradienteBackground';
import {moviePosterPath} from '../utils';
import {getImageColors} from '../helpers/getImageColors';
import {GradientContext} from '../context/GradientContext';

const {width: windowWidth} = Dimensions.get('window');

const HomeScreen = () => {
  const {setMainColors} = useContext(GradientContext);
  const {isLoading, nowPlaying, popular, topRated, upcoming} = useMovies();
  const {top} = useSafeAreaInsets();

  const getPosterColors = async (index: number) => {
    const posterPath = nowPlaying[index].poster_path;
    const uri = moviePosterPath(posterPath);
    const [primary = '#39B5E0', secondary = '#EB455F'] = await getImageColors(
      uri,
    );
    setMainColors({primary, secondary});
  };

  useEffect(() => {
    if (nowPlaying.length > 0) getPosterColors(0);
  }, [nowPlaying]);

  if (isLoading) {
    return (
      <View style={styles.HomeScreenActivityIndicator}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }

  return (
    <GradienteBackground>
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
              onSnapToItem={index => getPosterColors(index)}
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
    </GradienteBackground>
  );
};

export default HomeScreen;
