import {StyleSheet} from 'react-native';
import {metrics, colors} from '../../../core/constants';

export default StyleSheet.create({
  container: {
    flex: metrics.size1,
    backgroundColor: 'white',
  },
  subContainer: {
    marginHorizontal: metrics.size30,
    marginTop: metrics.size40,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    flex: metrics.size1,
  },
  cardContainer: {
    borderWidth: metrics.size1,
    borderColor: colors.GRAY,
    backgroundColor: colors.GRAY,
    marginTop: metrics.size40,
    marginHorizontal: metrics.size50,
    padding: metrics.size10,
  },
  cardTitleText: {
    fontSize: metrics.size20,
    alignSelf: 'center',
    fontWeight: 'bold',
  },

});
