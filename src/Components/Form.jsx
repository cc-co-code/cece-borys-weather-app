export default function Form({ onAddActivity }) {
  return (
    <>
      <h1>Add new Activity</h1>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="weatherCheckbox">Good Weather Activity:</label>
        <input type="checkbox" id="weatherCheckbox" name="weatherCheckbox" />
        <button onSubmit={onAddActivity}>submit</button>
      </form>
    </>
  );
}
