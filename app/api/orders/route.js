import { connectDB } from "@/utils/database";
import Order from "@/models/order";

export const POST = async (req, res)=>{
    try {
        await connectDB()
        const orderData = await req.json()
        const order = new Order(orderData)
        await order.save()
        return new Response('Order saved successfully', {status: 200})
    } catch (error) {
        return new Response('failed to save order', {status: 500})
    }
}