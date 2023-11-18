import { Editora } from "../modelo/Editora";

const editoras: Editora[] = [
    {
        nome: "Editora 1",
        codEditora: 2
    }
];

export class ControleEditora {
    getNomeEditora(codEditora: number) {
        const [editora] = editoras.filter((editora) => editora.codEditora === codEditora);
        return editora?.nome;
    }

    getEditoras() {
        return editoras;
    }
}