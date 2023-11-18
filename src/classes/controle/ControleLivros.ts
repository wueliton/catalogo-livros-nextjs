import { Livro } from "../modelo/Livro";

const livros: Livro[] = [
    {
        codigo: 2,
        codEditora: 2,
        titulo:'Livro 2',
        resumo: 'Resumo 2',
        autores: ['Pedro']
    }
]

export class ControleLivro {
    obterLivros() {
        return livros;
    }

    incluir(livro: Livro) {
        const cod = Math.max(...livros.map(({codigo}) => codigo));
        livros.push({...livro, codigo: cod + 1});
    }

    excluir(codigo: number) {
        const indice = livros.findIndex((livro) => livro.codigo === codigo);
        livros.splice(indice, 1);
    }
}