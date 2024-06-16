export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import { MongoClient, ObjectId, Timestamp } from 'mongodb';


const client = new MongoClient(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
await client.connect();
const database = client.db('SAC');
const collection = database.collection('gallery');

export async function POST(request) {
    const uniqueID = () => {
        const time = new Date().valueOf();
        const randNumber = Math.floor(Math.random() * 10000).toString()
        const randomState = time.toString().split('').map(Number).reduce((a, b) => a + b, 0) + randNumber
        return parseInt(randomState)
    }

    const method = request.nextUrl.searchParams.get("method")
    console.log(method);

    const { body } = await request.json();

    console.log(body);

    if (method === 'visible') {
        const filter = { id: body.id };
        const updateF = { $set: { visible: body.visible } };
        const result = await collection.updateOne(filter, updateF, { upsert: true });

        console.log(result);
        return NextResponse.json({ response: 'result.modifiedCount' }, { status: 200 });
    }


    if (method === 'create') {
        console.log(body);
        const newBody = {
            id: uniqueID(),
            ...body
        }
        const result = await collection.insertOne(newBody);

        return NextResponse.json({ response: result.modifiedCount }, { status: 200 });
    }

    if (method === 'delete') {
        const filter = { id: body.id };
        const result = await collection.deleteOne(filter);
        return NextResponse.json({ response: result.modifiedCount }, { status: 200 });
    }


}
