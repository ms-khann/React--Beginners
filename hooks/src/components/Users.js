import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const user_list = [
    {
        id: 1,
        name: "aman",
    },
    {
        id: 2,
        name: "saleh",
    },
    {
        id: 3,
        name: "ishtiaq",
    },
];
function Users() {
    return (
        <Router>
            <ul>
                {user_list.map((user) => (
                    <li key={user.id}>
                        <Link to={`/user/${user.id}`}>
                            {user.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </Router>
    );
}
export default Users;
