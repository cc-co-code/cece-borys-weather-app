import { useState } from "react";
import { uid } from "uid";
import "./App.css";
import Form from "./Components/Form";

function App() {
  const [name, setName] = useState("");
  const [isForGoodWeather, setIsForGoodWeather] = useState(false);
  function handleAddActivity(name, isForGoodWeather) {
    setName(name);
    setIsForGoodWeather(isForGoodWeather);
    const data = { id: uid(), name: name, isForGoodWeather: isForGoodWeather };
    console.log(data);
  }
  return <Form onAddActivity={handleAddActivity} />;
}

export default App;
