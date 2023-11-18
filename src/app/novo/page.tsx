"use client";
import { ControleEditora } from "@/classes/controle/ControleEditora";
import { Editora } from "@/classes/modelo/Editora";
import { Livro } from "@/classes/modelo/Livro";
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

const controleEditora = new ControleEditora();
const baseURL = "http://localhost:3000/api";

const LivroDados: NextPage = () => {
  const [opcoes, setOpcoes] = useState<{ value: number; text: string }[]>([]);
  const [titulo, setTitulo] = useState("");
  const [resumo, setResumo] = useState("");
  const [autores, setAutores] = useState("");
  const [codEditora, setCodEditora] = useState<number>();
  const router = useRouter();

  const incluirLivro = async (livro: Livro) => {
    const res = await fetch(`${baseURL}/livros`, {
      method: "POST",
      body: JSON.stringify(livro),
    });
    if (res.ok) {
      router.push("/catalogo");
    } else {
      console.log("Erro");
    }
  };

  const fetchEditoras = async () => {
    const res = await fetch(`${baseURL}/editoras`);
    const data = await res.json();
    const opcoes = (data as Editora[]).map((editora) => ({
        value: editora.codEditora!,
        text: editora.nome!,
      }))
    setOpcoes(
      opcoes
    );
    setCodEditora(opcoes[0].value);
  };

  const tratarCombo = (e: ChangeEvent<HTMLSelectElement>) => {
    setCodEditora(Number(e.target.value));
  };

  const incluir = (e: FormEvent) => {
    e.preventDefault();
    const livro = new Livro(
      0,
      codEditora!,
      titulo,
      resumo,
      autores.split(/\r?\n|\r|\n/g)
    );
    incluirLivro(livro);
  };

  useEffect(() => {
    fetchEditoras();
  }, [])

  return (
    <>
      <h1>Dados do Livro</h1>
      <form onSubmit={incluir}>
        <div className="mb-3">
          <label className="form-label">Título</label>
          <input
            className="form-control"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Resumo</label>
          <textarea
            className="form-control"
            rows={3}
            value={resumo}
            onChange={(e) => setResumo(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Editora</label>
          <select
            className="form-control"
            value={codEditora}
            onChange={tratarCombo}
          >
            {opcoes.map((editora) => (
              <option key={editora.value} value={editora.value}>
                {editora.text}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Autores (1 por linha)</label>
          <textarea
            className="form-control"
            rows={3}
            value={autores}
            onChange={(e) => setAutores(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Salvar Dados
        </button>
      </form>
    </>
  );
};

export default LivroDados;
