import clientPromise from "@/app/lib/mongodb"

export async function POST(request){
    const body = await request.json();
    const client = await clientPromise;
    const db = client.db('bitlinks');
    const collection = db.collection('url');

    //checks if the short url already exists
    const existingShortUrl = await collection.findOne({shortUrl:body.shortUrl});
    if(existingShortUrl){
        return Response.json({success:false,error:true,message:"Short Url already exists"})
    }


    const result = await collection.insertOne({
        url: body.url,
        shortUrl: body.shortUrl,
    })

    return Response.json({success:true,error:false,message:"URL Shortened Successfully"})
}