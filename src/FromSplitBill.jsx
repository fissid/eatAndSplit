import { useState } from "react";
import Button from "./Button";
export default function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setpaidByUser] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  const paidByFriend = bill ? bill - paidByUser : "";
  function submitHandler(e) {
    e.preventDefault();
    if (!bill | !paidByUser) return;
    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  }
  return (
    <form className="form-split-bill" onSubmit={submitHandler}>
      <h2>split a bill with X</h2>

      <label>💰 Bill Value:</label>
      <input type="text" value={bill} onChange={(e) => setBill(Number(e.target.value))} />

      <label>🧾 Your Expence:</label>
      <input type="text" value={paidByUser} onChange={(e) => setpaidByUser(Number(e.target.value) > bill ? paidByUser : Number(e.target.value))} />

      <label>📜 {selectedFriend.name}'s Expense:</label>
      <input type="text" disabled value={paidByFriend} />

      <label>🤑 Who is paying:</label>
      <select value={whoIsPaying} onChange={(e) => setWhoIsPaying(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}
