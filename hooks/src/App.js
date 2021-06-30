import React from "react";
import logo from "./logo.svg";
import Counter from "./components/Counter";
import CounterTwo from "./components/CounterTwo";
import FetchingData from "./components/FetchingData";
import { useEffect } from "react";
import A from "./A";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Users from './components/Users';
import User from "./components/User";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

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

function App() {
    return (
        <div className="App">
            {/* <Counter /> */}
            {/* <CounterTwo />
      <FetchingData />
      <UserContext.Provider value={'sahil'}>
          <ChannelContext.Provider value={'Code by sahil'}>
            <A />
          </ChannelContext.Provider>
      </UserContext.Provider> */}
            <Router>
                <ul>
                    <li>
                        <Link to="/">home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                </ul>

                <ul>
                    {user_list.map((user) => (
                        <li key={user.id}>
                            <Link to={`/user/${user.id}`}>{user.name}</Link>
                        </li>
                    ))}
                </ul>

                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/users">
                    <Users />
                </Route>
                <Route path="/user/:id">
                    <User />
                </Route>
            </Router>
        </div>
    );
}

export default App;
