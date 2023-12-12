import { useState } from "react";
import Button from "./Button";
import FriendsList from "./FriendsList";
import FormAddFriend from "./FromAddFriend";
import FormSplitBill from "./FromSplitBill";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [addFriend, setAddFriend] = useState(false);
  const [friendsData, setFriensData] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);
  function newFriendPasser(data) {
    setFriensData((prev) => [...prev, data]);
    setAddFriend(false);
  }
  function selectionHandler(fr) {
    setSelectedFriend((prev) => (prev?.id === fr.id ? null : fr));
    setAddFriend(false);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friendsData} onselection={selectionHandler} selectedFriend={selectedFriend} />
        {addFriend ? <FormAddFriend passData={newFriendPasser} /> : null}
        <Button onClick={() => setAddFriend((prev) => !prev)}>{addFriend ? "Close" : "New Friend"}</Button>
      </div>
      {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} />}
    </div>
  );
}

export default App;
