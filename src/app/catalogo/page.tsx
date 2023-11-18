"use client"
import { Livro } from "@/classes/modelo/Livro";
import { LinhaLivro } from "@/components/LinhaLivro";
import { NextPage } from "next";
import { useEffect, useState } from "react";

const baseURL = "http://localhost:3000/api/livros";

const LivroLista: NextPage = () => {
    const [livros, setLivros] = useState<Livro[]>([]);
    const [carregado, setCarregado] = useState(false);

    const fetchLivros = async () => {
        const res = await fetch(baseURL);
        const data = await res.json();
        return data;
    }

    const excluirLivro = async (codigo: number) => {
        const res = await fetch(`${baseURL}/${codigo}`, {
            method: 'DELETE'
        });
        if(res.ok) {
            console.log('sucesso');
        } else {
            console.log('falha');
        }
    }

    const excluir = (codigo: number) => {
        excluirLivro(codigo).then(() => fetchLivros()).then((livros) => setLivros(livros));
        setCarregado(false);
    }

    useEffect(() => {
        fetchLivros().then((livros) => {
            setLivros(livros);
            setCarregado(true);
        });
    }, []);

    return <div>
        <h1>Catálogo de Livros</h1>
      <table className="table table-striped">
        <thead className="table-dark">
          <tr>
            <th scope="col">Título</th>
            <th scope="col">Resumo</th>
            <th scope="col">Editora</th>
            <th scope="col">Autores</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {livros?.map((livro) => (
            <LinhaLivro livro={livro} excluir={excluir} key={livro.codigo} />
          ))}
        </tbody>
      </table>
    </div>
};

export default LivroLista;