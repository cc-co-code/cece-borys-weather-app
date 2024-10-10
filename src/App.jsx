import { useState, useEffect } from "react";
import List from "./Components/List/List";
import "./App.css";
import Form from "./Components/Form/Form";

function App() {
  const isGoodWeather = false;
  const [activities, setActivities] = useState(() => {
    const savedActivities = localStorage.getItem("activities");
    return savedActivities ? JSON.parse(savedActivities) : [];
  });
  useEffect(() => {
    localStorage.setItem("activities", JSON.stringify(activities));
  }, [activities]);
  function handleAddActivity(newActivity) {
    setActivities([...activities, newActivity]);
  }
  const filteredActivities = activities.filter(
    (activity) => activity.isForGoodWeather === isGoodWeather
  );
  console.log(activities);
  return (
    <>
      <List activities={filteredActivities} />

      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
