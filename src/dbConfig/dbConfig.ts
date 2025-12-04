import mongoose from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URI!)
        const connection = mongoose.connection;

        connection.on("connected", () => console.log("MongoDb onnnected"));
        connection.on("error", (err) => {
            console.log("Mongodb connection error error ❌", err)
            process.exit()

        });
         connection.on("disconnected", () => console.log("Mongo disconnected ⚠️"));

    } catch (error) {
        console.log("Something went wrong in connecting to DB")
        console.log(error)
    }
}