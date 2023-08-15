import { useState } from "react";
import { FriendsList } from "./components/FriendsList";
import { FormAddFriend } from "./components/FormAddFriend";
import { FormSplitBill } from "./components/FormSplitBill";
import { SideBar } from "./components/SideBar";
import { Button } from "./components/Button";

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

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowAddFriend() {
    setShowAddFriend(show => !show);
  }

  function handleAddFriend(newFriend) {
    setFriends(friends => [...friends, newFriend]);
    setShowAddFriend(show => !show);
  }

  function handleSelectedFriend(friend) {
    setSelectedFriend((curr) => (curr?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }

  function handleSplitBill(value) {
    setFriends(friends => friends.map(friend => friend.id === selectedFriend.id ? { ...friend, balance: friend.balance + value } : friend));

    setSelectedFriend(null);

  }


  return (
    <div className="app">
      <SideBar>
        <FriendsList friends={friends} selectedFriend={selectedFriend} onSelectFriend={handleSelectedFriend} />

        {
          showAddFriend
          &&
          <FormAddFriend onAddfriend={handleAddFriend} />
        }

        <Button onClick={handleShowAddFriend}>{showAddFriend ? "close" : "Add Friend"}</Button>
      </SideBar>
      {
        selectedFriend
        &&
        <FormSplitBill friend={selectedFriend} onSplitBill={handleSplitBill} key={selectedFriend.id} />
      }
    </div>

  );
}






