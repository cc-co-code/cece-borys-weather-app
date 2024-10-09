import { useState } from "react";
import List from "./Components/List/List";
import "./App.css";
import Form from "./Components/Form/Form";

function App() {
  // change array inside of object!
  const [activities, setActivities] = useState([
    { id: 0, name: "fish", isForGoodWeather: true },
  ]);
  function handleAddActivity(newActivity) {
    setActivities([...activities, newActivity]);
    console.log(activities);
  }

  return (
    <>
      {activities.map((activity) => (
        <li key={activity.id}>
          <List name={activity.name} />
        </li>
      ))}

      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
