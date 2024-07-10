// AuthContext.js
import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import apiService from '../../api/api';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUserId = localStorage.getItem('userId');

    if (storedToken && storedUserId) {
      setUser({ id: storedUserId });
      setToken(storedToken);
    }
  }, []);

  const login = (userData, authToken) => {
    setUser(userData);
    setToken(authToken);
    localStorage.setItem('token', authToken);
    localStorage.setItem('userId', userData.id);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
  };

  const register = async (userData) => {
    try {
      const response = await apiService.register(userData);
      const { message, id, token: authToken } = response
      console.log(message); // Mensagem do backend
      console.log('Novo ID de usuário:', id); // ID do novo usuário
      login({ id }, authToken); // Logar o usuário após o registro
      // Redirecionar ou fazer qualquer outra ação necessária após o registro
    } catch (error) {
      console.error('Erro ao registrar:', error);
      // Tratar erros de registro, como exibir mensagens de erro para o usuário
    }
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
