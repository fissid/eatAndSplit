import Friend from "./Friend";
export default function FriendsList({ friends }) {
  return (
    <ul>
      {friends.map((each) => (
        <Friend friend={each} key={each.id}></Friend>
      ))}
    </ul>
  );
}
