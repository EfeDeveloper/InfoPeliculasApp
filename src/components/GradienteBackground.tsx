import React, {useContext, useEffect} from 'react';
import {View, StyleSheet, Animated} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {IGradientBackgroundInterface} from '../interfaces/GradientInterface';
import {styles} from '../theme/theme';
import {GradientContext} from '../context/GradientContext';
import {useFade} from '../hooks/useFade';

export const GradienteBackground = ({
  children,
}: IGradientBackgroundInterface) => {
  const {colors, prevColors, setPrevMainColors} = useContext(GradientContext);
  const {opacity, fadeIn, fadeOut} = useFade();

  useEffect(() => {
    fadeIn(() => {
      setPrevMainColors(colors);
      fadeOut(100);
    });
  }, [colors]);

  return (
    <View style={styles.gradientBackgroundView}>
      <LinearGradient
        colors={[prevColors.primary, prevColors.secondary, 'white']}
        style={{...StyleSheet.absoluteFillObject}}
        start={{x: 0.1, y: 0.1}}
        end={{x: 0.5, y: 0.7}}
      />
      <Animated.View style={{...StyleSheet.absoluteFillObject, opacity}}>
        <LinearGradient
          colors={[colors.primary, colors.secondary, 'white']}
          style={{...StyleSheet.absoluteFillObject}}
          start={{x: 0.1, y: 0.1}}
          end={{x: 0.5, y: 0.7}}
        />
      </Animated.View>
      {children}
    </View>
  );
};
