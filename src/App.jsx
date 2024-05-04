import { useState } from "react"
import "./App.css"

function App() {
  const [todo, setTodo] = useState(["gym", "extraoo"])

  const [todoinput, setTodoinput] = useState("")

  function handleinput(e) {
    setTodoinput((i) => e.target.value)
  }

  function addTodo() {
    if (todoinput === "") {
      return
    }
    setTodo((td) => [...td, todoinput])
    setTodoinput("")
  }

  function deleteTodo(e, i) {
    const target = e.target.parentNode
    target.classList.toggle("bounceOut")
    setTimeout(() => {
      const updatedTodo = todo.filter((_val, ind) => ind !== i)
      setTodo(updatedTodo)
    }, 300)
  }

  return (
    <>
      <div className="container">
        <div className="animcontain">
          <div className="anim">
            <img src="src/assets/cyclist.gif" />
            <p>Designed by Paa Kwesi Ephraim</p>
          </div>
        </div>
        <h1>TODO</h1>
        <div className="todo__container">
          <div className="inputcontainer">
            <input
              type="text"
              value={todoinput}
              onChange={handleinput}
              placeholder="Enter Todo"
              maxLength={20}
            />
            <button type="button" onClick={addTodo}>
              Add todo
            </button>
          </div>
          <div className="taskcontainer">
            <ul>
              {todo.map((list, index) => {
                return (
                  <li className="todolist bounceIn" key={index}>
                    {list}{" "}
                    <button
                      id={index}
                      type="button"
                      onClick={() => deleteTodo(event, index)}
                    >
                      Delete
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
