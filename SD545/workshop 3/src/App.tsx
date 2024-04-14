import { KeyboardEvent, createContext, useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import List from "./components/List";
import Todo from "./types";


const TodoUpdateContext = createContext(null)

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addNewTodo = (newTodo:Todo) => {
    setTodos([...todos, newTodo]);
  };
  const updateTodo =(id:string)=>{

    const newTodos = todos.map(todo=>{
      if(todo.id===id){
        return {...todo, done: !todo.done}
      }else{
        return todo;
      }
    });
    setTodos(newTodos);
  }

  const deleteTodoById = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  useEffect(() => {
    async function getList() {
      const res = await fetch("http://localhost:9000/todos");
      const data = await res.json();
      setTodos(data);
    }
    getList();
  }, []);


  return (
    <div className="todo-container">
      <div className="todo-wrap">
        <Header addNewTodo={addNewTodo} />
        <List todos={todos} onupdateTodo={updateTodo} onDeleteTodoById={deleteTodoById}/>
        <Footer todos={todos}/>
       
      </div>
    </div>
  );
}
