import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import { useUserStore } from "./store/useUserStore.js";

import { ModuloEstado } from "./components/ModuloEstado";
import { ModuloEfeitos } from "./components/ModuloEfeitos";
import { ModuloFormulario } from "./components/ModuloFormulario";
import { ModuloGlobal } from "./components/ModuloGlobal";
import { ModuloTema } from "./components/ModuloTema";

export default function App() {
  const { tema } = useUserStore();

  const estiloApp = {
    backgroundColor:
      tema === "light" ? "#ffffff" : "#1a1a1a",

    color:
      tema === "light" ? "#000000" : "#ffffff",

    minHeight: "100vh",
    padding: "20px",
  };

  return (
    <BrowserRouter>
      <div style={estiloApp}>

        <h1>Projeto React - Treinamento</h1>

        <nav
          style={{
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",
            marginBottom: "20px",
          }}
        >
          <Link to="/">1. Estado</Link>

          <Link to="/efeitos">
            2. Efeitos
          </Link>

          <Link to="/formulario">
            3. Formulário
          </Link>

          <Link to="/global">
            4. Estado Global
          </Link>

          <Link to="/tema">
            5. Tema
          </Link>
        </nav>

        <Routes>

          <Route
            path="/"
            element={<ModuloEstado />}
          />

          <Route
            path="/efeitos"
            element={<ModuloEfeitos />}
          />

          <Route
            path="/formulario"
            element={<ModuloFormulario />}
          />

          <Route
            path="/global"
            element={<ModuloGlobal />}
          />

          <Route
            path="/tema"
            element={<ModuloTema />}
          />

        </Routes>

      </div>
    </BrowserRouter>
  );
}