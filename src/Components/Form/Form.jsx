import { uid } from "uid";
import "./Form.css";
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
    <section className="form">
      <h2 className="form__title">Add new Activity</h2>
      <form className="form__container" onSubmit={handleSubmit}>
        <label className="form__innerName" htmlFor="name">
          Name for your activity:
        </label>
        <input
          className="form__name"
          type="text"
          id="name"
          name="name"
          placeholder="e.g. Swimming"
          maxLength={"20"}
          required
        />
        <div className="form__checkboxContainer">
          <label className="form__innerCheckbox" htmlFor="isForGoodWeather">
            Good weather?
          </label>
          <input
            className="form__checkbox"
            type="checkbox"
            id="isForGoodWeather"
            name="isForGoodWeather"
          />
        </div>

        <button className="form__btnSubmit" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
}
