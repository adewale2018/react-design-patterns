import React, { useEffect, useState } from 'react';

import axios from 'axios';

const UserLoader = ({ userId, children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    (async () => {
      const response = await axios.get(`/users/${userId}/`);
      setUser(response.data);
    })();
  }, [userId]);
  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { user });
        }
        return child;
      })}
    </>
  );
};

export default UserLoader;
