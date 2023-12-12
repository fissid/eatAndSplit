import Button from "./Button";
export default function Friend({ friend, onselection, selectedFriend }) {
  //   if (!selectedFriend) return;
  const isSelecetd = selectedFriend.id === friend.id ? true : undefined;

  return (
    <li className={isSelecetd ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}$
        </p>
      )}

      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {Math.abs(friend.balance)}$
        </p>
      )}

      {friend.balance === 0 && <p>You and {friend.name} are even</p>}

      <Button onClick={() => onselection(friend)}>{isSelecetd ? "Close" : "Select"}</Button>
    </li>
  );
}
