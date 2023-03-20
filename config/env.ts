import dotenv from "dotenv";
dotenv.config({ path: "./config/.env" });

export const PORT = process.env.PORT || 5000;
export const SUPABASE_URL = process.env.SUPABASE_URL || "";
export const SUPABASE_KEY = process.env.SUPABASE_KEY || "";