import { useState, useEffect } from "react";
import List from "./Components/List/List";
import "./App.css";
import Form from "./Components/Form/Form";

function App() {
  const [isGoodWeather, setIsGoodWeather] = useState(null);
  const [id, setId] = useState(["europe", "arctic", "sahara", "rainforest"]);

  useEffect(() => {
    async function startFetching() {
      const response = await fetch(
        `https://example-apis.vercel.app/api/weather/${id}`
      );
      const isGoodWeather = await response.json();
      setIsGoodWeather(isGoodWeather);
      console.log(isGoodWeather);
    }
    startFetching();
  }, [id]);

  const [activities, setActivities] = useState(() => {
    const savedActivities = localStorage.getItem("activities");
    return savedActivities ? JSON.parse(savedActivities) : [];
  });

  useEffect(() => {
    localStorage.setItem("activities", JSON.stringify(activities));
  }, [activities]);
  if (!isGoodWeather) {
    return <p>Loading...</p>;
  }
  function handleAddActivity(newActivity) {
    setActivities([...activities, newActivity]);
  }
  const filteredActivities = activities.filter(
    (activity) => activity.isForGoodWeather === isGoodWeather.isGoodWeather
  );
  //console.log(activities);

  return (
    <>
      <List activities={filteredActivities} isForGoodWeather={isGoodWeather} />

      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
