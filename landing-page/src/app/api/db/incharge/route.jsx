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
    const ext = data[0]?.data;

    const dict = ext.map(item => ({
        club: item?.name,
        name: item?.incharge,
        position: item?.position,
        image: item?.incharge_photo,
        contact: item?.contact,
    }));


    return Response.json({ data: dict })

}


export async function POST(request) {
    const body = await request.json();

    const result = await collection.updateOne(
        {},
        { $push: { id: body.id } }
    );

    console.log(body.id);

    return NextResponse.json({ response: result.modifiedCount });
}

