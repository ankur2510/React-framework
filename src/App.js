import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import Footer from './MyComponents/Footer';
import  Todos  from './MyComponents/Todos';
import TodoItem from './MyComponents/TodoItem';
import React ,{ useState, useEffect } from 'react';
import AddTodo from './MyComponents/AddTodo';
import About from './MyComponents/About';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  let initTodo;
  if(localStorage.getItem("todos") === null){
    initTodo = [];
  }else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  // const[todos, setTodos] = useState([
  // {
  //   id: 1,
  //   title: "My First Todo",
  //   desc: "This is my first todo"
  // },
  // {
  //   id: 2,
  //   title: "My Second Todo",
  //   desc: "This is my second todo"
  // },
  // {
  //   id: 3,
  //   title: "My Third Todo",
  //   desc: "This is my third todo"
  // }
  // ]);
  const[todos, setTodos] = useState(initTodo);

  // Sync todos to localStorage whenever todos changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onDelete = (id)=>{
    console.log("I am on Delete of todo", id);
    setTodos(todos.filter((e)=>{
      return e.id !== id;
  }));
}
const addTodo = (title, desc)=>{
  console.log("I am adding this todo", title, desc);
  let id = todos.length + 1;
  const myTodo = {
    id: id,
    title: title,
    desc: desc
  }
  setTodos([...todos, myTodo]); // to add the new todo to the existing list of todos
  console.log(myTodo);
}
  return (
    // <div classNameName="App">
    //   <header classNameName="App-header">
    //     <img src={logo} classNameName="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       classNameName="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
 <Router>
  <Header title="My Todos List" searchBar={false} />
  <Routes>
    <Route path="/" element={
      <>
        <AddTodo addTodo={addTodo} />
        <Todos todos={todos} onDelete={onDelete} />
      </>
    } />
    <Route path="/about" element={<About />} />
  </Routes>
  <Footer />
</Router>

    </>
  );
}

export default App;
