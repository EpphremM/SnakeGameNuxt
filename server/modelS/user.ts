import { Document, Model, Schema } from "mongoose";
import mongoose from "mongoose";
export interface Iuser extends Document {
  username: string;
  highScore: number;
  password:string;
}
const userSchema: Schema<Iuser> = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  highScore: {
    type: Number,
    required: true,
  },
  password:{
    type:String,
    required:true
  }
});
const userModel: Model<Iuser> = mongoose.model<Iuser>("User", userSchema);
export default userModel;
