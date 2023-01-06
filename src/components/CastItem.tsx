import React from 'react';
import {Image, Text, View} from 'react-native';
import {ICastItem} from '../interfaces/detailsInterface';
import {styles} from '../theme/theme';
import {moviePosterPath} from '../utils';

export const CastItem = ({actor}: ICastItem) => {
  const uri = moviePosterPath(actor.profile_path);

  return (
    <View style={styles.castItemContainer}>
      {actor.profile_path && (
        <Image source={{uri}} style={styles.castItemImage} />
      )}

      <View style={styles.castItemActorInfo}>
        <Text style={styles.castItemName}>{actor.name}</Text>
        <Text style={styles.castItemCharacter}>{actor.character}</Text>
      </View>
    </View>
  );
};
