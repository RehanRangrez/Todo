import React from "react";

function Form({ setInputText, todos, setTodos, inputText, setStatus}) {
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText('')
  };


  const statusHandler=(e)=>{
    console.log(e.target.value)
    setStatus(e.target.value)
  }

  return (
    <form>
      <input
        type="text"
        className="todo-input"
        onChange={(e) => setInputText(e.target.value)}
        value={inputText}
      />
      <button className="todo-button" type="submit" onClick={submitTodoHandler}>
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;

