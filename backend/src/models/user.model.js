import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    profilePic: {
      type: String,
      default: "https://res.cloudinary.com/drd28jqxh/image/upload/v1746938650/kxt3ikini4bsxty953wj.png",
    },
  },
  { timestamps: true }
);
const User = mongoose.model("User",userSchema);
export default User
