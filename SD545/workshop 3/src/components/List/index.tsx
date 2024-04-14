import Todo from "../../types";
import Item from "../Item";
import "./index.css";

type Props = {
  todos: Todo[] | null;
  onupdateTodo:(id:string)=>void;
  onDeleteTodoById: (id: string) => void;
};

export default function List(props: Props) {
  const { todos, onupdateTodo, onDeleteTodoById } = props;
  return (
    <ul className="todo-main">
      <ul className="todo-main">
        {todos?.map((todo) => (
          <Item key={todo.id} {...todo} onUpdateTodo={onupdateTodo} onDeleteTodoById={onDeleteTodoById}/>
        ))}
      </ul>
    </ul>
  );
}
