import { connectDB } from "@/utils/database";
import Order from "@/models/order";

export const POST = async (req, res)=>{
    try {
        await connectDB()
        const orderData = await req.json()
        const order = new Order(orderData)
        await order.save()
        return new Response('success')
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'})
    }
}