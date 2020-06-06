import React, { useEffect, Fragment, useState } from "react";
import { useMutation, useSubscription } from "@apollo/react-hooks";
import gql from "graphql-tag";

import OnlineUser from "./OnlineUser";

const UPDATE_LASTSEEN_MUTATION = gql`
  mutation updateLastSeen($now: timestamptz!) {
    update_users(where: {}, _set: { last_seen: $now }) {
      affected_rows
    }
  }
`;

const GET_ONLINE_USERS = gql`
  subscription getOnlineUsers {
    online_users(order_by: { user: { name: asc } }) {
      id
      user {
        name
      }
    }
  }
`;

const OnlineUsersWrapper = () => {
  const { loading, error, data } = useSubscription(GET_ONLINE_USERS);
  const [onlineIndicator, setOnlineIndicator] = useState(0);
  useEffect(() => {
    // Every 30s, run a mutation to tell the backend that you're online
    updateLastSeen();
    setOnlineIndicator(setInterval(() => updateLastSeen(), 30000));

    return () => {
      // Clean up
      clearInterval(onlineIndicator);
    };
  }, []);

  const [updateLastSeenMutation] = useMutation(UPDATE_LASTSEEN_MUTATION);
  const updateLastSeen = () => {
    // Use the apollo client to run a mutation to update the last_seen value
    updateLastSeenMutation({
      variables: { now: new Date().toISOString() },
    });
  };

  let onlineUsersList;

  if (loading) {
    console.log("loading...");
    return <span>Loading...</span>;
  }
  if (error) {
    console.error(error);
    return <span>Error!</span>;
  }
  if (data) {
    console.log("data", data);
    onlineUsersList = data.online_users.map((u) => (
      <OnlineUser key={u.id} user={u.user} />
    ));
  }

  return (
    <div className="onlineUsersWrapper">
      <Fragment>
        <div className="sliderHeader">
          Online users - {onlineUsersList.length}
        </div>
        {onlineUsersList}
      </Fragment>
    </div>
  );
};

export default OnlineUsersWrapper;
