import {StyleSheet} from 'react-native';
import {metrics, colors} from '../../constants';

export default StyleSheet.create({
  container: {
    height: metrics.size40,
    width: '80%',
    borderBottomWidth: metrics.size1,
    borderBottomColor: colors.WHITE,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: metrics.size20,
  },
  textStyle: {
    padding: metrics.size0,
    flex: metrics.size1,
    color: colors.WHITE,
    fontSize: metrics.size14,
  },
  iconStyle: {
    marginRight: metrics.size15,
  },
});
