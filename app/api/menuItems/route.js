import MenuItem from "@/models/menuItem";
import { connectDB } from "@/utils/database";

export const GET = async (req, res)=>{
    try {
        await connectDB()
        const menuItems = await MenuItem.find()
        return new Response(JSON.stringify(menuItems), {status: 200})
    } catch (error) {
        return new Response('Failed to get menu items', {status: 500})
    }
}