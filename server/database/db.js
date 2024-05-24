import mongoose from "mongoose";

const Connection = async () => {
  const URL =
    "mongodb://developerdabulu117:Dabulumongo117@ac-hx2ndu5-shard-00-00.qvhab1g.mongodb.net:27017,ac-hx2ndu5-shard-00-01.qvhab1g.mongodb.net:27017,ac-hx2ndu5-shard-00-02.qvhab1g.mongodb.net:27017/?ssl=true&replicaSet=atlas-q7r6wp-shard-0&authSource=admin&retryWrites=true&w=majority&appName=whatsappduplicate";

  try {
    await mongoose.connect(URL, { useUnifiedTopology: true });

    console.log("Database connected sucessfully");
  } catch (error) {
    console.log("Error while connecting to Database",error.message);
  }
};

export default Connection;
