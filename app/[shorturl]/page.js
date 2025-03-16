import {redirect} from 'next/navigation'
import clientPromise from '../lib/mongodb'

export default async function Page({ params }) {
    const  shorturl  = (await params).shorturl

    const client = await clientPromise;
    const db = client.db('bitlinks');
    const collection = db.collection('url');

    const result = await collection.findOne({shortUrl:shorturl})

    
    if(result){
        redirect(result?.url)
    }else{
        redirect(`${process.env.NEXT_PUBLIC_HOST}`)
    }
    
}