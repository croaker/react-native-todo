import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

const Task = ({ description, complete }) => {
  const descriptionStyle = [
    styles.description,
    complete && styles.descriptionComplete
  ];

  return (
    <View style={styles.container}>
      <Text style={descriptionStyle}>
        {description}
      </Text>
    </View>
  );
};

Task.propTypes = {
  description: PropTypes.string.isRequired,
  complete: PropTypes.bool.isRequired
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderColor: '#eee',
    borderBottomWidth: 1
  },
  description: {
    fontSize: 16,
    color: '#16161d'
  },
  descriptionComplete: {
    color: '#ccc',
    textDecorationLine: 'line-through',
  }
});

export default Task;
