import "./App.css";
import { useState } from "react";
import Table from "./Table";

function App() {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState("");
  const [number, setNumber] = useState(0);

  const handle_fetch = () => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${number}`)
      .then((res) => {
        // Unfortunately, fetch doesn't send (404 error) into the cache itself
        // You have to send it, as I have done below
        if (!res.ok) {
          throw new Error("Server responds with error!" + res.status);
        }
        return res.json();
      })
      .then(
        (todos) => {
          setTodos([todos]); //creating an array
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components
        (error) => {
          console.log(error);
          setError(error.message);
        }
      );
  };

  const capture_id = (e) => {
    console.log(e);
    setNumber(e.target.value);
  };

  //capture_id(1)

  return (
    <div className="App">
      <input type="number" onChange={capture_id} />

      <button onClick={handle_fetch}> Fetch Data</button>
      <br />
      {JSON.stringify(error)}
      <br />
      <Table todos={todos}> </Table>
    </div>
  );
}

export default App;
