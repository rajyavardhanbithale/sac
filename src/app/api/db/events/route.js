export const dynamic = "force-dynamic";
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
    const param = req.nextUrl.searchParams.get('id')

    if (param) {
        if (/^\d+$/.test(param)) {
            const events = (await collection.find({ 'id': parseInt(param) }).toArray()).reverse();
            if(events.length === 0){
                return Response.json({ message: "invalid ID" },{status:404});
            }
            return Response.json({ data: events });
        } else {
            console.log(param);
            return Response.json({ message: "invalid ID" },{status:404});
        }
    }

    const events = (await collection.find().toArray()).reverse()

    

    return Response.json({ data: events })

}

