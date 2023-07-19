import Order from "@/models/order";
import { connectDB } from "@/utils/database";
import { NextResponse } from "next/server";



export const GET = async (request, {params})=>{
    try {
        await connectDB()
        const id = params.id
        const userOrders = await Order.find({user: id}).populate("items.item").populate("user")
        return new Response(JSON.stringify(userOrders))
    } catch (error) {
        console.log(error)
        return NextResponse.json({success: false})
    }
}

export const POST = async (request, {params})=>{
    try {
        await connectDB()
        const id = params.id
        const order = await request.json()
        const newOrder = new Order({user: id, ...order})
        await newOrder.save()
        return NextResponse.json({success: true})
    } catch (error) {
        console.log(error)
        return NextResponse.json({success: false})
    }
}