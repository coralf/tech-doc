import * as React from 'react';
import ReactDOM from 'react-dom';
import { observable, computed } from 'mobx';
import { observer } from 'mobx-react';
class Todo {
  id = Math.random();
  @observable title: string;
  @observable finished: boolean = false;
  constructor(title: string) {
    this.title = title;
  }
}

class TodoList {
  @observable todos: Todo[] = [];
  @computed get unfinishedTodoCount() {
    return this.todos.filter(todo => !todo.finished).length;
  }
}

interface Props {
  [key: string]: any;
}
@observer
class TodoListView extends React.Component<Props> {
  render() {



    console.log('this.props.todoList :>> ', this.props.todoList);
    return <div>
      <ul>
        {this.props.todoList.todos.map((todo: Todo) =>
          <TodoView todo={todo} key={todo.id} />
        )}
      </ul>
      Tasks left: {this.props.todoList.unfinishedTodoCount}
    </div>
  }
}

const TodoView = observer(({ todo }: { todo: Todo }) =>
  <li>
    <input
      type="checkbox"
      checked={todo.finished}
      onChange={() => {
        console.log('todo.finished :>> ', todo.finished);
        todo.finished = !todo.finished
      }}
    />{todo.title}:{todo.finished + ''}
  </li>
);

const store = new TodoList();
store.todos.push(
  new Todo("Get Coffee"),
  new Todo("Write simpler code")
);
store.todos[0].finished = true;
ReactDOM.render(<TodoListView todoList={store} />, document.getElementById('root'));


