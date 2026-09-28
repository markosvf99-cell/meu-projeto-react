import { useState } from "react";

export function ModuloEfeitos() {
  const [imagem, setImagem] = useState(() => {
    return localStorage.getItem("@projeto:imagemSalva") || null;
  });

  const handleUpload = (event) => {
    const arquivo = event.target.files[0];

    if (arquivo) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImagem(reader.result);
        localStorage.setItem("@projeto:imagemSalva", reader.result);
      };

      reader.readAsDataURL(arquivo);
    }
  };

  return (
    <div>
      <h2>2. Módulo de Efeitos</h2>

      <input
        type="file"
        accept="image/*"
        onChange={handleUpload}
      />

      {imagem && (
        <img
          src={imagem}
          alt="Imagem Persistida"
          style={{ maxWidth: "300px", display: "block", marginTop: "20px" }}
        />
      )}
    </div>
  );
}