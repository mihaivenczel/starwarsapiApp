import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {RoundedButtonStyles as styles} from './styles';

const RoundedButton = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

export default RoundedButton;
