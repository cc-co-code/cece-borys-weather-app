import { uid } from "uid";

export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const formElements = form.elements;
    const data = {
      id: uid(),
      name: formElements.name.value,
      isForGoodWeather: formElements.isForGoodWeather.checked,
    };
    onAddActivity(data);
    form.reset();
    formElements.name.focus();
  }
  return (
    <>
      <h2>Add new Activity</h2>
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
