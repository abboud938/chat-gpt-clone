import mongoose from "mongoose";

const connect = async () => {
  try {
    console.log();
    await mongoose.connect(process.env.MONGO);
    return true;
  } catch (err) {
    return err;
  }
};

export default connect;
