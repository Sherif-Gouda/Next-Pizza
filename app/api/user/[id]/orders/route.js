import Order from "@/models/order";
import { connectDB } from "@/utils/database";
import { NextResponse } from "next/server";


export const GET = async(request, {params})=>{
    try {
        await connectDB()
        const orders = await Order.find({user: params.id}).populate('user').populate('items.item')
        return new Response(JSON.stringify(orders), {status: 200})

    } catch (error) {
        return new Response('Failed to get Orders', {status: 500})
    }
}
