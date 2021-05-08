import {StyleSheet} from 'react-native';
import {metrics, colors} from '../../constants';

export default StyleSheet.create({
  container: {
    height: metrics.size50,
    backgroundColor: colors.GREY,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: metrics.size25,
    borderWidth: metrics.size1,
    width: '50%',
  },
  textStyle: {
    color: colors.WHITE,
    fontSize: metrics.size14,
    fontWeight: 'bold',
  },
});
