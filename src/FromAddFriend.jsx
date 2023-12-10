import Button from "./Button";
export default function FormAddFriend() {
  return (
    <form className="form-add-friend">
      <label>👩🏻‍🤝‍👩🏻 Friend Name:</label>
      <input type="text" />

      <label></label>
      <input type="text" />

      <Button>Add</Button>
    </form>
  );
}
