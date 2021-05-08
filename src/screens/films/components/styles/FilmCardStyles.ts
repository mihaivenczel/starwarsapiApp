import {StyleSheet} from 'react-native';
import {metrics, colors} from '../../../../core/constants';

export default StyleSheet.create({
  cardContainer: {
    flex: metrics.size1,

    marginTop: metrics.size20,
    marginHorizontal: metrics.size50,
    padding: metrics.size10,
  },
  cardTitleText: {
    fontSize: metrics.size20,
    color: colors.YELLOW,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
});
