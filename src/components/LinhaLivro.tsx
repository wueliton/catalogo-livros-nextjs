import { FC } from "react";
import { ControleEditora } from "../classes/controle/ControleEditora";
import { Livro } from "@/classes/modelo/Livro";

const controleEditora = new ControleEditora();

interface LinhaLivroProps {
  livro: Livro;
    excluir: (codigo: number) => void;
}

export const LinhaLivro: FC<LinhaLivroProps> = ({
  livro,
  excluir,
}) => {
  return (
    <tr>
      <td>{livro.titulo}</td>
      <td>{livro.resumo}</td>
      <td>{controleEditora.getNomeEditora(livro.codEditora)}</td>
      <td>
        <ul>
          {livro.autores?.map((autor, i) => (
            <li key={i}>{autor}</li>
          ))}
        </ul>
      </td>
      <td>
        <button
          type="button"
          onClick={() => excluir(livro.codigo)}
          className="btn btn-danger"
        >
          Excluir
        </button>
      </td>
    </tr>
  );
};