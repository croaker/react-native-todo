import React, { Component } from 'react';
import { FlatList, Text } from 'react-native';
import PropTypes from 'prop-types';

class TaskList extends Component {
  keyExtractor(task) {
    return task.id;
  }

  renderItem({ item: task }) {
    return (
      <Text>
        {task.description}
      </Text>
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

export default TaskList;
