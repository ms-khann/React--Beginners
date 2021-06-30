import React, { useContext } from "react";
import { UserContext, ChannelContext } from "./App";

function A() {
    const user = useContext(UserContext);
    const channel = useContext(ChannelContext);
    return (
        <h1>
            <div>name:{user}</div>
            <div>channel:{channel}</div>
        </h1>
        // <div>
        //     <UserContext.Consumer>
        //         {
        //             (user) => {
        //                 return (
        //                     <ChannelContext>
        //                         {
        //                             (channel) => {
        //                                 return <h1>
        //                                     name: {user}
        //                                     channel: {channel}
        //                                 </h1>
        //                             }
        //                         }
        //                     </ChannelContext>
        //                 )
        //             }
        //         }
        //     </UserContext.Consumer>
        // </div>
    );
}

export default A;
