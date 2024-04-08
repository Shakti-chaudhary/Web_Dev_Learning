import React, { useState } from "react";
import UserContext from "./UserContext";

// const UserContext = React.createContext(); // Second way of creating context

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
