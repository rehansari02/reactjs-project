import { createContext, useContext, useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [cookie, setCookie, removeCookie] = useCookies(["jwt"]);

  const login = (tokenStr) => {
    if (tokenStr) {
      setToken(tokenStr);
      const decoded = jwtDecode(tokenStr);
      setUser(decoded);

      if (decoded?.exp) {
        setCookie("jwt", tokenStr, {
          path: "/",
          maxAge: decoded.exp, // exp seconds me hota hai, agar sahi nahi chala toh (decoded.exp - Date.now()/1000) use karna
          sameSite: true,
        });
      }

      return;
    }
    logout();
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    removeCookie("jwt", { path: "/" });
  };

  useEffect(() => {
    if (cookie?.jwt) {
      setToken(cookie.jwt);
      const decoded = jwtDecode(cookie.jwt);
      setUser(decoded);
    }
  }, [cookie]);

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
