import { ControleLivro } from "@/classes/controle/ControleLivros";
import { Livro } from "@/classes/modelo/Livro";
import { NextApiRequest, NextApiResponse } from "next";

export const controleLivro = new ControleLivro();

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === "GET") {
      const livros = controleLivro.obterLivros();
      res.status(200).json(livros);
    } else if (req.method === "POST") {
      const body = JSON.parse(req.body);
      const { codigo, codEditora, titulo, resumo, autores } = body;

      if (
        codigo === null ||
        codEditora === null ||
        titulo === null ||
        resumo === null ||
        autores === null
      )
        return res.send(400);

      const livro = new Livro(
        Number(codigo),
        Number(codEditora),
        titulo,
        resumo,
        autores
      );

      controleLivro.incluir(livro);
      res.status(201).json(livro);
    } else {
      res.status(405);
    }
  } catch {
    res.status(500);
  }
}
