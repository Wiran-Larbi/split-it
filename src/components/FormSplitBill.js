import { useState } from "react";
import { Button } from "./Button";



export function FormSplitBill({ friend, onSplitBill }) {
    const [bill, setBill] = useState("");
    const [userExpense, setUserExpense] = useState("");
    const [whoIsPaying, setWhoIsPaying] = useState("user");

    let friendExpense = bill ? bill - userExpense > 0 ? bill - userExpense : 0 : '';

    function handleSubmit(e) {
        e.preventDefault();

        if (!bill || !userExpense) return

        onSplitBill(whoIsPaying === "user" ? friendExpense : -userExpense);

    }

    return (
        <>
            <form className="form-split-bill" onSubmit={handleSubmit}>
                <h2>Split a bill with {friend.name}</h2>

                <label>💲Bill value</label>
                <input type="text" value={bill} onChange={e => setBill(e.target.value.match(/^[0-9.]+$/) ? Math.abs(+e.target.value) : '')} />

                <label>👨🏻 Your expense</label>
                <input type="text" value={userExpense} onChange={e => setUserExpense(e.target.value.match(/^[0-9.]+$/) ? Math.abs(+e.target.value) > bill ? userExpense : Math.abs(+e.target.value) : '')} />

                <label>👨🏻‍🤝‍👩🏻 {friend.name}'s expense</label>
                <input type="text" value={friendExpense} disabled />

                <label>🧐 Who is paying the bill</label>
                <select value={whoIsPaying} onChange={e => setWhoIsPaying(e.target.value)}>
                    <option value='user'>You</option>
                    <option value='friend'>{friend.name}</option>
                </select>

                <Button>Split bill</Button>
            </form>
        </>
    )
}