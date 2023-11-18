import { NextApiRequest, NextApiResponse } from "next";
import { controleEditora } from ".";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        if(req.method === 'GET') {
            const { codEditora } = req.query;
            const nome = controleEditora.getNomeEditora(Number(codEditora));
    
            if(!nome || !codEditora) return res.status(404);
    
            res.status(200).json({ nome })
        } else {
            res.status(405);
        }
    } catch {
        res.status(500);
    }
}