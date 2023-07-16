import MenuItem from "@/models/menuItem";
import { connectDB } from "@/utils/database";

export const GET = async ()=>{
    try {
        await connectDB()
        const menuItems = await MenuItem.find()
        console.log(menuItems)
        return new Response(JSON.stringify(menuItems))
    } catch (error) {
        return new Response(error)
    }
}