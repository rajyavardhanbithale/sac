export const dynamic = "force-dynamic";
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
    const uniqueID = () => {
        const time = new Date().valueOf();
        const randNumber =  Math.floor(Math.random()*10000).toString()
        const randomState = time.toString().split('').map(Number).reduce((a,b)=>a+b,0) + randNumber
        return parseInt(randomState)
    } 



    const method = request.nextUrl.searchParams.get("method")

    const body = await request.json();
    const update = {
        id: uniqueID(),
        title: body.title,
        location: body.location,
        date: body.date,
        price: body.price,
        description: body.description,
        imageID: body.imageID,
        register: body.register
    }

    if (method === 'update') {
        const id = ObjectId.createFromHexString(body.objectID)
        const filter = { _id: id };
        const updateF = { $set: update };
        const result = await collection.updateOne(filter, updateF, { upsert: true });
      

        return NextResponse.json({ response: result.modifiedCount }, { status: 200 });
    }

    if (method === 'create') {
        const result = await collection.insertOne(update);


        return NextResponse.json({ response: result.modifiedCount }, { status: 200 });
    }

    if (method === 'delete') {
        const id = ObjectId.createFromHexString(body.objectID)


        const filter = { _id: id };
        const result = await collection.deleteOne(filter);


        return NextResponse.json({ response: result.modifiedCount }, { status: 200 });
    }
}
