import { useUserStore } from "../store/useUserStore.js";

export function ModuloGlobal() {
  const {
    usuario,
    login,
    logout,
  } = useUserStore();

  return (
    <div>
      <h2>4. Estado Global (Zustand)</h2>

      <p>
        Usuário Atual: {usuario}
      </p>

      <button onClick={() => login("Ana")}>
        Entrar
      </button>

      <button
        onClick={logout}
        style={{ marginLeft: "10px" }}
      >
        Sair
      </button>
    </div>
  );
}