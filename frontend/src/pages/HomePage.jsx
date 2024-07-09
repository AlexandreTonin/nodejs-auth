import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const HomePage = () => {
  const { user, token } = useContext(AuthContext);

  return (
    <>
      <main className="px-64">
        <h1>HomePage</h1>
        {token ? (
          <p>Usuário logado com ID: {user.id}</p>
        ) : (
          <p>Usuário não está logado</p>
        )}
      </main>
    </>
  );
};

export default HomePage;
