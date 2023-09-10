import mongoose, { mongo } from "mongoose";

const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDb connected: ${conn.connection.host}`);

    }

    catch (error) {
        console.log(`error ${error.message}`);
        process.exit(1);
    }
}

export default connectDb;