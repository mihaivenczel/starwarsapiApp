import {StyleSheet} from 'react-native';
import {metrics, colors} from '../../../core/constants';

export default StyleSheet.create({
  text: {
    fontSize: metrics.size20,
    textAlign: 'center',
    color: colors.YELLOW,
    fontWeight: 'bold',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
});
