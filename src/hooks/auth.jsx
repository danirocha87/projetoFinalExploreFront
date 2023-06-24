import { createContext, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const res = await api.post("/sessions", { email, password });
      const { user, token } = res.data

      localStorage.setItem("@foodexplorer:user", JSON.stringify(user));
      localStorage.setItem("@foodexplorer:token", token);

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({ user, token });

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possivel entrar.");
      }
    }
  }

  function signOut() {
    localStorage.removeItem('@foodexplorer:token');
    localStorage.removeItem('@foodexplorer:user');

    setData({});
  }

  async function updateProfile({ user, avatarFile }) {
    try {
      if (avatarFile) {
        const fileUploadForm = new FormData();

        fileUploadForm.append("avatar", avatarFile);

        const res = await api.patch('/users/avatar', fileUploadForm);

        user.avatar = res.data.avatar;
      }

      await api.put("/users", user);

      localStorage.setItem("@foodexplorer:user", JSON.stringify(user));

      setData({
        user,
        token: data.token
      });

      alert("Perfil atualizado");

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possivel entrar.");
      }
    }
  }

  useEffect(() => {
    const user = localStorage.getItem('@foodexplorer:user');
    const token = localStorage.getItem('@foodexplorer:token');

    if (token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({
        token,
        user: JSON.parse(user)
      })
    }

  }, [])

  return (
    <AuthContext.Provider value={{
      signIn,
      signOut,
      updateProfile,
      user: data.user
    }}>
      {children}
    </AuthContext.Provider >
  )
}

function useAuth() {
  const context = useContext(AuthContext);

  return context
}

export {
  AuthProvider,
  useAuth
};
