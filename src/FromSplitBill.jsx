import Button from "./Button";
export default function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>split a bill with X</h2>

      <label>💰 Bill Value:</label>
      <input type="text" />

      <label>🧾 Your Expence:</label>
      <input type="text" />

      <label>📜 X's Expense:</label>
      <input type="text" disabled />

      <Button>Split Bill</Button>
    </form>
  );
}
