import {StyleSheet} from 'react-native';
import {metrics, colors} from '../../../core/constants';

export default StyleSheet.create({
  mainContainer: {
    flex: metrics.size1,
  },
  scrollContainer: {
    flex: metrics.size1,
    backgroundColor: 'transparent',
  },
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
  },
  contentContainer: {
    flex: 1,
    transform: [{rotateX: '50deg'}],
    marginBottom: metrics.size125,
  },
  textTitle: {
    marginTop: metrics.size30,
    marginBottom: metrics.size60,
    fontSize: metrics.size50,
    letterSpacing: metrics.size2,
    textAlign: 'center',
    color: colors.YELLOW,
    fontWeight: 'bold',
  },
  text: {
    fontSize: metrics.size20,
    textAlign: 'center',
    color: colors.YELLOW,
    fontWeight: 'bold',
  },
});
