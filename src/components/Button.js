import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderColor: '#007aff',
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 10,
    marginLeft: 10
  },

  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 16,
    fontWeight: '600'
  }
};


export default Button;
