import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

class TaskList extends Component {
  keyExtractor(task) {
    return task.id;
  }

  renderItem({ item: task }) {
    const descriptionStyle = [
      styles.taskDescription,
      task.complete && styles.taskDescriptionComplete
    ];

    return (
      <View style={styles.taskContainer}>
        <Text style={descriptionStyle}>
          {task.description}
        </Text>
      </View>
    );
  }

  render() {
    return (
      <FlatList
        data={this.props.tasks}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
      />
    );
  }
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired
};

const styles = StyleSheet.create({
  taskContainer: {
    padding: 15,
    borderColor: '#eee',
    borderBottomWidth: 1
  },
  taskDescription: {
    fontSize: 16,
    color: '#16161d'
  },
  taskDescriptionComplete: {
    color: '#ccc',
    textDecorationLine: 'line-through',
  }
});

export default TaskList;
