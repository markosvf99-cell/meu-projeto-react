import { useUserStore } from "../store/useUserStore.js";

export function ModuloTema() {
  const {
    tema,
    alternarTema,
  } = useUserStore();

  return (
    <div>
      <h2>5. Tema</h2>

      <p>
        Tema atual: {tema.toUpperCase()}
      </p>

      <button onClick={alternarTema}>
        Alternar Tema
      </button>
    </div>
  );
}