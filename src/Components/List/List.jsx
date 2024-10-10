export default function List({ activities, isForGoodWeather }) {
  console.log(isForGoodWeather.isGoodWeather);
  return (
    <section>
      <h1>
        {isForGoodWeather.isGoodWeather
          ? "Good Weather Activities"
          : "Bad Weather Activities"}
      </h1>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>{activity.name}</li>
        ))}
      </ul>
    </section>
  );
}
