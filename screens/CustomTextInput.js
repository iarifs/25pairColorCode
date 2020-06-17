import React from 'react';
import {TextInput} from 'react-native';
const CustomTextInput = ({value, name, onChange, placeholder, style}) => {
  return (
    <TextInput
      value={value}
      name={name}
      keyboardType="number-pad"
      onChangeText={value => onChange({name, value})}
      placeholder={placeholder}
      placeholderTextColor="grey"
      style={style}
    />
  );
};
export default CustomTextInput;
