import React from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {FieldInputStyles as styles} from './styles';
import {colors, metrics} from '../constants';

const FieldInput = ({
  placeholder,
  value,
  onChangeValue,
  leftIconName,
  rightIconName,
  secureTextEntry,
  textContentType,
  autoCapitalize,
  autoCorrect,
  autoCompleteType,
  onPressRightIcon,
}) => {
  return (
    <View style={styles.container}>
      <Icon
        name={leftIconName}
        color={colors.WHITE}
        size={metrics.size20}
        style={styles.iconStyle}
      />
      <TextInput
        onChangeValue={onChangeValue}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={colors.WHITE}
        secureTextEntry={secureTextEntry}
        textContentType={textContentType}
        style={styles.textStyle}
        autoCapitalize={autoCapitalize}
        autoCorrect={autoCorrect}
        autoCompleteType={autoCompleteType}
      />
      <TouchableOpacity onPress={onPressRightIcon}>
        <Icon
          name={rightIconName}
          color={colors.WHITE}
          size={metrics.size20}
          style={styles.iconStyle}
        />
      </TouchableOpacity>
    </View>
  );
};

export default FieldInput;
