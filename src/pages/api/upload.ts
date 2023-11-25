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

    const filePath = `/uploads/${file[0].originalFilename}`;

    // fs.rename(file[0].filepath, filePath, (err) => {
    //   if (err) {
    //     console.error('Error renaming file:', err);
    //     res.status(500).json({ success: false, message: 'Error uploading file' });
    //     return;
    //   }
    //   console.log(files)
    //   res.status(200).json({ success: true, message: 'File uploaded successfully' });
    // });

    
    const readStream = fs.createReadStream(file[0].filepath);
    const writeStream = fs.createWriteStream(filePath);

    readStream.on('error', (err) => {
      console.error('Error reading file stream:', err);
      return res.status(500).json({ success: false, message: 'Error uploading file', error: err.message });
    });

    writeStream.on('error', (err) => {
      console.error('Error writing file stream:', err);
      return res.status(500).json({ success: false, message: 'Error uploading file', error: err.message });
    });

    writeStream.on('finish', () => {
      console.log('File uploaded:', filePath);
      res.status(200).json({ success: true, message: 'File uploaded successfully', filePath });
    });

    readStream.pipe(writeStream);
  });
}