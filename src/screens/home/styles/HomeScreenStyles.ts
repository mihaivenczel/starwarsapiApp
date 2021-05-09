import {StyleSheet} from 'react-native';
import {metrics, colors} from '../../../core/constants';

export default StyleSheet.create({
  container: {
    flex: metrics.size1,
    backgroundColor: colors.GRAY,
  },
  titleContainer: {
    flex: metrics.size1,
    marginTop: metrics.size40,
    alignSelf: 'center',
  },

  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  text: {
    fontSize: metrics.size40,
    color: colors.WHITE,
    fontWeight: 'bold',
  },
  button: {
    zIndex: metrics.size10,
    marginTop: metrics.size100,
    borderWidth: metrics.size1,
    borderColor: 'white',
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: metrics.size20,
    color: colors.WHITE,
    fontWeight: 'bold',
  },
});
