import "./List.css";
export default function List({
  activities,
  isForGoodWeather,
  onDeleteActivity,
}) {
  console.log(isForGoodWeather.isGoodWeather);
  return (
    <section className="list">
      <h1 className="list__title">
        {isForGoodWeather.isGoodWeather
          ? `Good Weather Activities`
          : `Bad Weather Activities`}
      </h1>
      <div className="list__temperature">{`${isForGoodWeather.condition}${isForGoodWeather.temperature}°`}</div>
      <ul>
        {activities.map((activity) => (
          <li className="list__item" key={activity.id}>
            {activity.name}
            <button
              className="list__button"
              onClick={() => onDeleteActivity(activity.id)}
            >
              &#x2715;
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
