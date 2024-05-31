import { NextResponse } from "next/server";

import { MongoClient, ObjectId } from 'mongodb';


const client = new MongoClient(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

await client.connect();
const database = client.db('SAC');
const collection = database.collection('events');

export async function POST(request) {

    const method = request.nextUrl.searchParams.get("method")

    const body = await request.json();
    const update = {
        title: body.title,
        location: body.location,
        date: body.date,
        price: body.price,
        description: body.description,
        imageID: body.imageID
    }

    if (method === 'update') {
        const id = ObjectId.createFromHexString(body.objectID)
        const filter = { _id: id };
        const updateF = { $set: update };
        const result = await collection.updateOne(filter, updateF, { upsert: true });
        console.log(result);

        return NextResponse.json({ response: result.modifiedCount }, { status: 200 });
    }

    if (method === 'create') {
        const result = await collection.insertOne(update);
        console.log(result);

        return NextResponse.json({ response: result.modifiedCount }, { status: 200 });
    }

    if (method === 'delete') {
        const id = ObjectId.createFromHexString(body.objectID)

        
        const filter = { _id: id };
        const result = await collection.deleteOne(filter);
        console.log(result);

        return NextResponse.json({ response: result.modifiedCount }, { status: 200 });
    }
}
