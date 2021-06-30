import React, { useState, useEffect } from "react";
import axios from "axios";

function FetchingData() {
    const [count, setCount] = useState(0);
    const [users,setUser] = useState([]);

    useEffect(() => {
        document.title = `count ${count}`;
    }, [count]);

    useEffect(() => {
        console.log("componet did mount");
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
        .then((data) => {
            console.log(data.data);
            setUser([data.data]);
        })
        .catch((err) => {
            console.log(err);
        });
        return () => {
            console.log("componet will unmount");
        };
    }, []);
    return (
        <div>
            <div>{count}</div>
            <button onClick={() => setCount(count + 1)}>Click</button>
            <div>
                {users.map(user => <p key={useState.id}>{user.title}</p>)}
            </div>
        </div>
    );
}
export default FetchingData;
