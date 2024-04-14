import { KeyboardEvent } from "react";
import Todo from "../../types";
import "./index.css";
import { nanoid } from 'nanoid'

type Props = {
  addNewTodo: (todo: Todo) => void;
};

export default function Header(props: Props) {
  const { addNewTodo } = props;

  const addList = (e: KeyboardEvent<HTMLInputElement>) => {
    let value = e.currentTarget.value;
    if (value.trim()) {
      if (e.key === "Enter") {
        addNewTodo({
          id: nanoid(),
          name: value,
          done: false,
        });
        e.currentTarget.value = ''
      }
    } else {
      alert("Task cannot be empty");
    }
  };

  return (
    <div className="todo-header">
      <input type="text" placeholder="Enter task name" onKeyUp={addList} />
    </div>
  );
}
