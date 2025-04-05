import mongoose from "mongoose";


export async function connect_db() {
    try {
        
        await mongoose.connect(process.env.MONGODB_URI! );

        const connection = mongoose.connection;

        // Attach listeners only once
        connection.on("connected", () => {
});

        connection.on("error", (err) => {
            console.error("❌ DB Connection Error:", err);
        });

    } catch (error) {
        console.error("❌ Connection Error:", error);
    }
}
