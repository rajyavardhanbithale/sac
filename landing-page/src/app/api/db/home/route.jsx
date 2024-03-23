import { MongoClient } from 'mongodb';
import { NextResponse } from 'next/server';

const client = new MongoClient(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

await client.connect();
const database = client.db('SAC');
const collection = database.collection('home');

export async function GET(req, res) {


    const data = await collection.find({"id":"club_info"}).toArray();
    return Response.json({ data: data[0] })

}
