import dotenv from "dotenv";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

dotenv.config();

const connectionString = process.env.DATABASE_URL;

let client
let db;

try {
    // Attempt to create a connection
    client = neon(connectionString);

    // Initialize Drizzle ORM
    db = drizzle(client);

    console.log("Connected to the database successfully.");
} catch (error) {
    console.error("Failed to connect to the database:", error.message);
    // Handle the error or throw it to be caught higher up in the stack
    throw new Error("Database connection failed.");
}

export { client, db };
