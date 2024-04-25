import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const fileName = String(req.query.id);

    res.writeHead(200, {
        "Content-Type": "application/octet-stream",
        "Content-Disposition": "attachment"
    });

    const readStream = fs.createReadStream(`./uploads/${fileName}`);
    readStream.pipe(res);
}
