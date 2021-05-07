import mongoose from "mongoose";

const connectDB = async () => {
  const dbPASS = "OrEOkaWe5OWEDlqU";
  const dbURI = `mongodb+srv://admin:${dbPASS}@cluster0.a3tio.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

  try {
    const conn = await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
