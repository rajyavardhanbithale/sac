export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import { MongoClient, ObjectId } from 'mongodb';
import { unstable_noStore } from 'next/cache';

const client = new MongoClient(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

export async function POST(request) {
    unstable_noStore()
    await client.connect();
    const database = client.db('SAC');
    const collection = database.collection('events');


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
