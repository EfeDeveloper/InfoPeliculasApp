import ImageColors from 'react-native-image-colors';

export const getImageColors = async (imageUri: string) => {
  let primary: string = '#000';
  let secondary: string = '#000';
  const result = await ImageColors.getColors(imageUri, {});

  switch (result.platform) {
    case 'android':
      primary = result.dominant!;
      secondary = result.average!;
      break;
    case 'ios':
      primary = result.primary;
      secondary = result.secondary;
      break;
    default:
      throw new Error('Unexpected platform key');
  }
  return [primary, secondary];
};
