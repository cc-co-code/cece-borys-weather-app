export default function List({
  activities,
  isForGoodWeather,
  onDeleteActivity,
}) {
  console.log(isForGoodWeather.isGoodWeather);
  return (
    <section>
      <h1>
        {isForGoodWeather.isGoodWeather
          ? `Good Weather Activities${isForGoodWeather.condition}`
          : `Bad Weather Activities${isForGoodWeather.condition}`}
      </h1>
      <h3>{`${isForGoodWeather.temperature}°`}</h3>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>
            {activity.name}
            <button onClick={() => onDeleteActivity(activity.id)}>X</button>
          </li>
        ))}
      </ul>
    </section>
  );
}
