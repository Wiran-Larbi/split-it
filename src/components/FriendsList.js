import { Friend } from "./Friend"


export function FriendsList({ friends, selectedFriend, onSelectFriend }) {

    return (
        <>
            <ul>
                {
                    friends.map(friend => <Friend friend={friend} key={friend.id} selectedFriend={selectedFriend} onSelectFriend={onSelectFriend} />)
                }
            </ul>
        </>
    )
}