import React, { Component } from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';

import Task from './Task';

class TaskList extends Component {
  keyExtractor(task) {
    return task.id;
  }

  renderItem({ item: task }) {
    return <Task {...task} />;
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
