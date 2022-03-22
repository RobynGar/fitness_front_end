const UserContext = createContext();

const UserProvider = ({ children }) => {
    // User is the name of the "data" that gets stored in context
    const [user, setUser] = useState({ id: '', auth: true });
  
    // Login updates the user data with a name parameter
    const login = (id) => {
      setUser((user) => ({
        id: id,
        auth: true,
      }));
    };
  
    // Logout updates the user data to default
    const logout = () => {
      setUser((user) => ({
        id: '',
        auth: false,
      }));
    };
  
    return (
      <UserContext.Provider value={{ user, login, logout }}>
        {children}
      </UserContext.Provider>
    );
  }

  export default UserContext;