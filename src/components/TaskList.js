import React, { Component } from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';

import Task from './Task';

class TaskList extends Component {
  onTaskPress = (id) => {
    console.log('Task #', id, ' pressed!');
  }

  renderItem = ({ item: task }) => {
    return (
      <Task
        {...task}
        onPress={this.onTaskPress}
      />
    );
  }

  keyExtractor(task) {
    return task.id;
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
