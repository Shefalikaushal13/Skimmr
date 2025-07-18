import mongoose, { mongo } from "mongoose";

const MONGODB_URI=process.env.MONGODB_URI!;

if(!MONGODB_URI){
    throw new Error("Please define mongodb URI in env file"); 
}

declare global {
  var mongoose: {
    conn: mongoose.Connection | null;
    promise: Promise<mongoose.Connection> | null;
  };
}

// Initialize the cache (for hot reload in dev mode)
let cached = global.mongoose;

if(!cached){
    cached=global.mongoose ={conn:null, promise:null};
}
//if doesnt, create one

export async function connectToDB(){
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: true,
            maxPoolSize: 10
        }


        cached.promise = mongoose
            .connect(MONGODB_URI, opts)
            .then(() => mongoose.connection);
    }

    try {
  cached.conn = await cached.promise;
} catch (error: unknown) {
  if (error instanceof Error) {
    console.error("❌ MongoDB connection error:", error.message);
  } else {
    console.error("❌ MongoDB connection error:", error);
  }
  cached.promise = null;
  throw new Error("Check Database Connection");
}


    return cached.conn;
}