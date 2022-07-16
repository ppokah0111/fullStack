import Button from "@mui/material/Button";
import "./App.css";
import { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => setCounter(counter + 1); //function

  return (
    <div className="App" class="centered" spacing={2}>
      Counter: {counter} <br /> 
      
      <Stack direction="row" spacing={2}>
        <Button variant="contained" onClick={handleIncrement}> Increment </Button>
        <Button variant="outlined" sendIcon={<SendIcon />}> Send </Button>
      </Stack>
      
    </div>
  );
}
