import { NextApiRequest, NextApiResponse } from 'next';
import {IncomingForm} from 'formidable';
import fs from 'fs';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const form = new IncomingForm();

  form.parse(req, (err, fields, files) => {
    if (err) {
      console.error('Error parsing form:', err);
      res.status(500).json({ success: false, message: 'Error uploading file' });
      return;
    }

    const file  = files[''];


    if (!file) {
      res.status(400).json({ success: false, message: 'No file provided for upload' });
      return;
    }

    console.log(file)

    const filePath = `./public/uploads/${file[0].originalFilename}`;

    fs.rename(file[0].filepath, filePath, (err) => {
      if (err) {
        console.error('Error renaming file:', err);
        res.status(500).json({ success: false, message: 'Error uploading file' });
        return;
      }
      console.log(files)
      res.status(200).json({ success: true, message: 'File uploaded successfully' });
    });
  });
}