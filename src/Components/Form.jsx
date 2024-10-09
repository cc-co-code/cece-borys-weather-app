export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formElements = event.target.elements;
    const name = formElements.name.value;
    const isForGoodWeather = formElements.isForGoodWeather.checked;
    onAddActivity(name, isForGoodWeather);
    event.target.reset();
  }
  return (
    <>
      <h1>Add new Activity</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="isForGoodWeather">Good Weather Activity:</label>
        <input type="checkbox" id="isForGoodWeather" name="isForGoodWeather" />
        <button>submit</button>
      </form>
    </>
  );
}
