import mongoose from "mongoose";

let isConnected = false; // Track connection status

export async function connect_db() {
    try {
        if (isConnected) {
            console.log("⚡ Already connected to MongoDB");
            return;
        }

        await mongoose.connect(process.env.MONGODB_URI! || 'mongodb+srv://ravidassubodh605:qvJci69J6i36m9kp@cluster0.yg69t.mongodb.net/');

        const connection = mongoose.connection;

        // Attach listeners only once
        connection.once("connected", () => {
            console.log("✅ DB Connected");
        });

        connection.once("error", (err) => {
            console.error("❌ DB Connection Error:", err);
        });

        isConnected = true; // Mark as connected
    } catch (error) {
        console.error("❌ Connection Error:", error);
    }
}
