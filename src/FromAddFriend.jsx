import { useState } from "react";
import Button from "./Button";
export default function FormAddFriend({ passData }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  function submitHandler(e) {
    e.preventDefault();
    if (!name || !image) return;
    const newFriend = {
      name,
      image,
      balance: 0,
      id: crypto.randomUUID(),
    };
    passData(newFriend);
    setName("");
    setImage("");
  }

  return (
    <form className="form-add-friend" onSubmit={submitHandler}>
      <label>👩🏻‍🤝‍👩🏻 Friend Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

      <label>📷 Image URL:</label>
      <input type="file" value={image} onChange={(e) => setImage(e.target.value)} />

      <Button>Add</Button>
    </form>
  );
}
