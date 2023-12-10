import Friend from "./Friend";
export default function FriendsList({ friends, onselection, selectedFriend }) {
  return (
    <ul>
      {friends.map((each) => (
        <Friend friend={each} key={each.id} onselection={onselection} selectedFriend={selectedFriend}></Friend>
      ))}
    </ul>
  );
}
