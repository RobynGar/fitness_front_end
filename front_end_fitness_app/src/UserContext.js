import { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
    // User is the name of the "data" that gets stored in context
    const [user, setUser] = useState({ id: '', auth: false });
  
    // Login updates the user data with a name parameter
    const login = (id, username) => {
      setUser((user) => ({
        id: id,
        username: username,
        auth: true,
      }));
    };
  
    // Logout updates the user data to default
    const logout = () => {
      setUser((user) => ({
        id: '',
        username: '',
        auth: false,
      }));
    };
  
    return (
      <UserContext.Provider value={{ user, login, logout }}>
        {children}
      </UserContext.Provider>
    );
  }

  export { UserContext, UserProvider }