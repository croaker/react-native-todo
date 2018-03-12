import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';

const Task = ({ id, description, complete, onPress }) => {
  const descriptionStyle = [
    styles.description,
    complete && styles.descriptionComplete
  ];

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onPress(id)}>
        <Text style={descriptionStyle}>
          {description}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

Task.propTypes = {
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  complete: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired
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
