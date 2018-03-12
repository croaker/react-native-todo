import React, { Component } from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';

import Task from './Task';

class TaskList extends Component {
  constructor(props) {
    super(props);

    this.state = { tasks: props.tasks };
  }

  onTaskPress = (id) => {
    const taskIdx = this.state.tasks.map(t => t.id).indexOf(id);

    if (taskIdx !== -1) {
      const newTasks = this.state.tasks.slice();

      newTasks[taskIdx].complete = !newTasks[taskIdx].complete;

      this.setState({ tasks: newTasks });
    }
  }

  keyExtractor(task) {
    return task.id;
  }

  renderItem = ({ item: task }) => {
    return (
      <Task
        {...task}
        onPress={this.onTaskPress}
      />
    );
  }

  render() {
    return (
      <FlatList
        data={this.state.tasks}
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
