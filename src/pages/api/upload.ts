import { NextApiRequest, NextApiResponse } from "next";
import { IncomingForm } from "formidable";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const form = new IncomingForm();

    form.parse(req, (err, fields, files) => {
        if (err) {
            console.error("Error parsing form:", err);
            res.status(500).json({ success: false, message: "Error uploading file" });
            return;
        }

        const file = files[""];

        if (!file) {
            res.status(400).json({ success: false, message: "No file provided for upload" });
            return;
        }

        const uniqueId = uuidv4();
        const fileName = `${uniqueId}_${file[0].originalFilename}`;
        const filePath = `./public/uploads/${fileName}`;

        const readStream = fs.createReadStream(file[0].filepath);
        const writeStream = fs.createWriteStream(filePath);

        readStream.on("error", (err) => {
            console.error("Error reading file stream:", err);
            return res.status(500).json({ success: false, message: "Error uploading file", error: err.message });
        });

        writeStream.on("error", (err) => {
            console.error("Error writing file stream:", err);
            return res.status(500).json({ success: false, message: "Error uploading file", error: err.message });
        });

        writeStream.on("finish", () => {
            console.log("File uploaded:", filePath);
            const fileLink = `${process.env.NEXTAUTH_URL}/uploads/${fileName}`;
            console.log("File link: ", fileLink);
            res.status(200).json({ success: true, message: "File uploaded successfully", filePath, fileLink });
        });

        readStream.pipe(writeStream);
    });
}
