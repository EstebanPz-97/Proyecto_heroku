// import './App.css';
import { TodoCounter } from "./TodoCounter";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";

const todos =[
  {text:'cortar cebolla',completed:false},
  {text:'tomar curso de platzi',completed:false},
  {text:'llorar con la llorona',completed:false}
]

function App() {
  return (
    <>
    <TodoCounter />
     <TodoSearch />
    <TodoList>
      {todos.map(todo =>(
        <TodoItem key={todo.text}  text={todo.text} />
      ))}
    </TodoList>
     <CreateTodoButton />

    </>


  );
}

export default App;
