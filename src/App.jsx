import { useState } from "react";
import List from "./Components/List/List";
import "./App.css";
import Form from "./Components/Form/Form";

function App() {
  const [activities, setActivities] = useState([]);
  function handleAddActivity(newActivity) {
    setActivities([...activities, newActivity]);
  }
  console.log(activities);
  return (
    <>
      <List activities={activities} />

      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
