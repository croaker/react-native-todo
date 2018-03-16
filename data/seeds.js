import { v4 } from 'uuid';

export default [
  {
    id: v4(),
    description: 'buy some milk',
    complete: false
  },
  {
    id: v4(),
    description: 'write notes for shop talk',
    complete: true
  },
  {
    id: v4(),
    description: 'Another task',
    complete: false
  }
];
