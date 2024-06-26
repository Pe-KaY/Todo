import { useEffect, useState } from "react"
import "./App.css"
import cyclist from "./assets/cyclist.gif"

function App() {
  const [todo, setTodo] = useState([])

  const [todoinput, setTodoinput] = useState("")

  function handleinput(e) {
    setTodoinput((i) => e.target.value)
  }

  function addTodo() {
    if (todoinput.trim() === "") {
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

  useEffect(() => {
    const addam = document.getElementById("addam")
    const input = document.querySelector('input[type="text"]')

    const handleEnterKey = (e) => {
      if (e.key === "Enter") {
        addam.click()
      }
    }

    input.addEventListener("keydown", handleEnterKey)

    return () => {
      input.removeEventListener("keydown", handleEnterKey)
    }
  }, [])

  return (
    <>
      <div className="container">
        <div className="animcontain">
          <div className="anim">
            <img src={cyclist} />
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
            <button id="addam" type="button" onClick={addTodo}>
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
