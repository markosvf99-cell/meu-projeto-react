import { create } from "zustand";

export const useUserStore = create((set) => ({
  usuario: "Visitante",

  tema: "light",

  login: (novoNome) =>
    set({
      usuario: novoNome,
    }),

  logout: () =>
    set({
      usuario: "Visitante",
    }),

  alternarTema: () =>
    set((state) => ({
      tema:
        state.tema === "light"
          ? "dark"
          : "light",
    })),
}));