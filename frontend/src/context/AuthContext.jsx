import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("loggedInUser");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const register = (name, email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const exists = users.find((u) => u.email === email);

    if (exists) {
      return "User already exists";
    }

    const newUser = {
      name,
      email,
      password,
    };

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    return "Success";
  };

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = users.find(
      (u) => u.email === email && u.password === password,
    );

    if (!foundUser) {
      return "Invalid Credentials";
    }

    setUser(foundUser);

    localStorage.setItem("loggedInUser", JSON.stringify(foundUser));

    return "Success";
  };

  const logout = () => {
    setUser(null);

    localStorage.removeItem("loggedInUser");

    localStorage.removeItem("cartItems");

    localStorage.removeItem("wishlistItems");

    window.location.reload();
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        register,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
