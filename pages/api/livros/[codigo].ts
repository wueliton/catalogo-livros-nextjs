import { NextApiRequest, NextApiResponse } from "next";
import { controleLivro } from ".";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        if(req.method === 'DELETE') {
            const {codigo} = req.query;
            controleLivro.excluir(Number(codigo));
            res.send(200);
        } else {
            res.send(405);
        }
    } catch {
        res.send(500);
    }
}