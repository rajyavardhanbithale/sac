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
    const club = req.nextUrl.searchParams.get("page")
    const data = await collection.find({ "id": "club_info" }).toArray();
    const data1 = await collection.find({ "id": "club_gallery" }).toArray();

    const ext = data[0]?.data;
    const ext1 = data1[0]?.data;



    const filter1 = ext.filter(item => item.name === club)
    const filter2 = ext1.filter(item => item.name === club)


    return Response.json({ data: filter1[0],gallery:filter2[0]})

}


export async function POST(request) {
    const body = await request.json();

    const result = await collection.updateOne(
        {},
        { $push: { id: body.id } }
    );

    // console.log(body.id);

    return NextResponse.json({ response: result.modifiedCount });
}

