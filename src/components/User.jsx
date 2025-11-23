import { useState } from "react";

const User = (props) => {
    const [count] = useState(0);
    const [count2] = useState(1);

    return (
        <div className="user-card m-4 p-4 rounded-lg">
            <h1>Counter1: {count}</h1>
            <h1>Counter2: {count2}</h1>
            <h2>Name: {props.name}</h2>
            <h3>Location: {props.location}</h3>
            <h4>Contact: @itsmeshvm</h4>
        </div>
    )
}

export default User;