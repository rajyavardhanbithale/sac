import { MongoClient } from 'mongodb';
import { NextResponse } from 'next/server';

const client = new MongoClient(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

await client.connect();
const database = client.db('SAC');
const collection = database.collection('events');

export async function GET(req, res) {
   
    const events = (await collection.find().toArray()).reverse()

    return Response.json({ data: events})

}

