import {StyleSheet} from 'react-native';

export const colores = {
  primary: '#5856D6',
};

export const styles = StyleSheet.create({
  //HomeScreen
  HomeScreenActivityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  HomeScreenViewPrincipal: {
    height: 440,
  },
  //MoviePoster
  moviePosterView: {
    marginHorizontal: 2,
    paddingBottom: 20,
    paddingHorizontal: 7,
  },
  moviePosterShadow: {
    flex: 1,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 10,
  },
  moviePosterImage: {
    flex: 1,
    borderRadius: 20,
  },
  //HorizontalSlider
  horizontalSliderViewWithTitle: {
    height: 260,
  },
  horizontalSliderUntitledView: {
    height: 230,
  },
  popularesTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  //DetailScreen
  detailScreenImageMainContainer: {
    width: '100%',
    borderRadius: 20,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 10,
  },
  detailScreenImageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  detailPosterImage: {
    flex: 1,
  },
  // movieDetailView
  movieDetailsContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  movieDetailsTitle: {
    fontSize: 16,
    opacity: 0.8,
  },
  movieDetailsSubTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  movieDetailsVoteAverage: {
    flexDirection: 'row',
  },
  movieDetailsSectionsTitle: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold',
  },
  movieDetailsSectionsSubTitle: {
    fontSize: 16,
  },
  MovieDetailsCastingList: {marginTop: 10, height: 70},
  movieDetailsCastingContainer: {
    marginTop: 10,
    marginBottom: 100,
  },
  // CastItem
  castItemContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingRight: 15,
    marginRight: 20,
    marginTop: 5,
    height: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 10,
  },
  castItemImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  castItemActorInfo: {
    marginLeft: 10,
    marginTop: 4,
  },
  castItemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  castItemCharacter: {
    fontSize: 16,
    opacity: 0.7,
  },
  //BackIcon
  backButton: {
    position: 'absolute',
    zIndex: 99,
    elevation: 9,
    top: 30,
    left: 5,
  },
  //GradientBackground
  gradientBackgroundView: {
    flex: 1,
  },
});
