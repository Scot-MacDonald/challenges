import mongoose from "mongoose";
import "./Review";
const { Schema } = mongoose;

const mixSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Number, required: true },
  image: { type: Image, required: true },
});

const Mix = mongoose.models.Mix || mongoose.model("Mix", mixSchema);

export default Mix;
