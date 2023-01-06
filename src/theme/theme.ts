import {StyleSheet} from 'react-native';

export const colores = {
  primary: '#5856D6',
};

export const styles = StyleSheet.create({
  HomeScreenActivityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  HomeScreenViewPrincipal: {
    height: 440,
  },
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
  detailImageMainContainer: {
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
  detailImageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  detailPosterImage: {
    flex: 1,
  },
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
});
