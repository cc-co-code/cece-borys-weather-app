import { useState } from "react";

import "./App.css";
import Form from "./Components/Form";

function App() {
  // change array inside of object!
  const [activities, setActivities] = useState([
    { id: 0, name: "fish", isForGoodWeather: true },
  ]);
  function handleAddActivity(newActivity) {
    setActivities([...activities, newActivity]);
    console.log(activities);
  }

  return <Form onAddActivity={handleAddActivity} />;
}

export default App;
