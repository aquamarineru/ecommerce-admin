import prismadb from '@/lib/prismadb'
import { auth } from '@clerk/nextjs'
import { NextResponse } from 'next/server'

export async function POST (
    req: Request,
) {
    try{
        const { userId } = auth()
        const body = await req.json()
        const { name } = body

        if(!userId){
            return new NextResponse( "Unauthorized", {status: 401})
        }
        if(!name){
            return new NextResponse( "Missing name", {status: 400})
        }
        const store = await prismadb.store.create({
            data: {
                name,
                userId
            }
        })
        return new NextResponse( JSON.stringify(store), {status: 200})
    }
    catch(err){
        console.log('[STORES_POST]', err)
        return new NextResponse( "Interal error", {status: 500})
    }
}
