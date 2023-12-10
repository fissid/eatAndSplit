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
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={initialFriends} />
        <FormAddFriend />
        <Button>New Friend</Button>
      </div>
      <FormSplitBill></FormSplitBill>
    </div>
  );
}

export default App;
