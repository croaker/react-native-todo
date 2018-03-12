import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

const Header = ({ text }) => {
  const { viewStyle, textStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{text}</Text>
    </View>
  );
};

Header.propTypes = {
  text: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  viewStyle: {
    height: 60,
    paddingTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    backgroundColor: '#FA8072'
  },
  textStyle: {
    fontSize: 20,
    color: '#16161d'
  }
});

export default Header;
