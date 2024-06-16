import fs from 'fs';
import { NextResponse } from 'next/server';
import path from 'path';

export async function GET() {
    const folderPath = path.join(process.cwd(), 'public/upload');

    try {
        const files = await fs.promises.readdir(folderPath);
        // console.log(files);
        return NextResponse.json({ message: files, status: 200 });
    } catch (err) {
        console.error('Error reading files:', err);
        return NextResponse.json({ error: 'Error reading files', status: 500 });
    }
}
