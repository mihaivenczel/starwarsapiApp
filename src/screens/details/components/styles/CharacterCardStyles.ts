import {StyleSheet} from 'react-native';
import {metrics, colors} from '../../../../core/constants';

export default StyleSheet.create({
  cardContainer: {
    flex: metrics.size1,
    borderWidth: metrics.size1,
    borderColor: colors.GRAY,
    backgroundColor: colors.GRAY,
    // marginTop: metrics.size20,
    marginBottom:50,
    marginHorizontal: metrics.size50,
    padding: metrics.size10,
  },
  cardTitleText: {
    fontSize: metrics.size20,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
});
